from pathlib import Path

import pandas as pd
from catboost import CatBoostRegressor


BASE_DIR = Path(__file__).resolve().parent.parent

ARTIFACTS_DIR = BASE_DIR / "artifacts"

DEMAND_MODEL_PATH = (
    ARTIFACTS_DIR / "demand_forecasting_model.cbm"
)

REVENUE_MODEL_PATH = (
    ARTIFACTS_DIR / "revenue_forecasting_model.cbm"
)


FEATURES = [
    "quantity",
    "revenue",
    "price_base",

    "online_quantity",
    "online_revenue",

    "discount_price_before",
    "discount_price_after",
    "discount_days",
    "discount_percentage",
    "has_discount",

    "normal_price",
    "markdown_price",
    "markdown_quantity",
    "markdown_percentage",
    "has_markdown",

    "historical_price",
    "price_difference",
    "price_difference_percentage",

    "year",
    "month",
    "quarter",
    "week_of_year",
    "day_of_week",
    "day_of_month",
    "is_weekend",

    "quantity_lag_1",
    "quantity_lag_7",
    "quantity_lag_14",
    "quantity_lag_28",

    "revenue_lag_1",
    "revenue_lag_7",
    "revenue_lag_14",
    "revenue_lag_28",

    "quantity_rolling_mean_7",
    "quantity_rolling_mean_14",
    "quantity_rolling_mean_28",

    "revenue_rolling_mean_7",
    "revenue_rolling_mean_14",
    "revenue_rolling_mean_28",

    "sales_growth_7",
    "revenue_growth_7",
]


class ValtrixaPredictionService:

    def __init__(self):

        if not DEMAND_MODEL_PATH.exists():
            raise FileNotFoundError(
                f"Demand model not found: "
                f"{DEMAND_MODEL_PATH}"
            )

        if not REVENUE_MODEL_PATH.exists():
            raise FileNotFoundError(
                f"Revenue model not found: "
                f"{REVENUE_MODEL_PATH}"
            )

        self.demand_model = CatBoostRegressor()

        self.revenue_model = CatBoostRegressor()

        self.demand_model.load_model(
            str(DEMAND_MODEL_PATH)
        )

        self.revenue_model.load_model(
            str(REVENUE_MODEL_PATH)
        )

        print(
            "VALTRIXA AI models loaded successfully."
        )

    def prepare_input(self, data):

        dataframe = pd.DataFrame([data])

        for feature in FEATURES:

            if feature not in dataframe.columns:
                dataframe[feature] = 0

        dataframe = dataframe[FEATURES]

        dataframe = dataframe.apply(
            pd.to_numeric,
            errors="coerce"
        )

        dataframe = dataframe.fillna(0)

        return dataframe

    def predict(self, data):

        dataframe = self.prepare_input(data)

        demand_prediction = (
            self.demand_model.predict(
                dataframe
            )[0]
        )

        revenue_prediction = (
            self.revenue_model.predict(
                dataframe
            )[0]
        )

        demand_prediction = max(
            0,
            float(demand_prediction)
        )

        revenue_prediction = max(
            0,
            float(revenue_prediction)
        )

        return {
            "predictedDemand7Days": round(
                demand_prediction,
                2
            ),
            "predictedRevenue7Days": round(
                revenue_prediction,
                2
            )
        }