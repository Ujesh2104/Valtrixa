from pathlib import Path
import json

import pandas as pd
from catboost import CatBoostRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score


BASE_DIR = Path(__file__).resolve().parent.parent

DATA_PATH = (
    BASE_DIR
    / "datasets"
    / "processed"
    / "model_features.csv"
)

ARTIFACTS_DIR = BASE_DIR / "artifacts"

ARTIFACTS_DIR.mkdir(
    parents=True,
    exist_ok=True
)


TARGET = "future_7_day_revenue"


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


def load_data():

    print("Loading processed dataset...")

    if not DATA_PATH.exists():
        raise FileNotFoundError(
            f"Dataset not found: {DATA_PATH}"
        )

    data = pd.read_csv(
        DATA_PATH
    )

    print(
        f"Dataset loaded: "
        f"{data.shape[0]:,} rows"
    )

    return data


def prepare_data(data):

    print("\nPreparing revenue training data...")

    available_features = [
        feature
        for feature in FEATURES
        if feature in data.columns
    ]

    missing_features = [
        feature
        for feature in FEATURES
        if feature not in data.columns
    ]

    if missing_features:

        print("\nMissing features:")

        for feature in missing_features:
            print(f" - {feature}")

    X = data[
        available_features
    ].copy()

    y = data[
        TARGET
    ].copy()

    X = X.fillna(0)
    y = y.fillna(0)

    return X, y, available_features


def time_based_split(X, y):

    print("\nCreating time-based train/test split...")

    split_index = int(
        len(X) * 0.8
    )

    X_train = X.iloc[
        :split_index
    ]

    X_test = X.iloc[
        split_index:
    ]

    y_train = y.iloc[
        :split_index
    ]

    y_test = y.iloc[
        split_index:
    ]

    print(
        f"Training samples: "
        f"{len(X_train):,}"
    )

    print(
        f"Testing samples: "
        f"{len(X_test):,}"
    )

    return (
        X_train,
        X_test,
        y_train,
        y_test
    )


def train_model(
    X_train,
    y_train
):

    print("\nTraining revenue forecasting model...")

    model = CatBoostRegressor(
        iterations=700,
        depth=8,
        learning_rate=0.05,
        loss_function="RMSE",
        eval_metric="RMSE",
        random_seed=42,
        verbose=100
    )

    model.fit(
        X_train,
        y_train
    )

    return model


def evaluate_model(
    model,
    X_test,
    y_test
):

    print("\nEvaluating revenue model...")

    predictions = model.predict(
        X_test
    )

    mae = mean_absolute_error(
        y_test,
        predictions
    )

    rmse = mean_squared_error(
        y_test,
        predictions
    ) ** 0.5

    r2 = r2_score(
        y_test,
        predictions
    )

    print("\n" + "=" * 60)
    print("REVENUE MODEL PERFORMANCE")
    print("=" * 60)

    print(
        f"MAE  : {mae:.4f}"
    )

    print(
        f"RMSE : {rmse:.4f}"
    )

    print(
        f"R²   : {r2:.4f}"
    )

    return {
        "MAE": float(mae),
        "RMSE": float(rmse),
        "R2": float(r2)
    }


def save_model(
    model,
    metrics,
    features
):

    model_path = (
        ARTIFACTS_DIR
        / "revenue_forecasting_model.cbm"
    )

    metrics_path = (
        ARTIFACTS_DIR
        / "revenue_model_metrics.json"
    )

    features_path = (
        ARTIFACTS_DIR
        / "revenue_model_features.json"
    )

    model.save_model(
        model_path
    )

    with open(
        metrics_path,
        "w"
    ) as file:

        json.dump(
            metrics,
            file,
            indent=4
        )

    with open(
        features_path,
        "w"
    ) as file:

        json.dump(
            features,
            file,
            indent=4
        )

    print("\n" + "=" * 60)
    print("REVENUE MODEL SAVED")
    print("=" * 60)

    print(
        f"Model: {model_path}"
    )

    print(
        f"Metrics: {metrics_path}"
    )


def main():

    print("=" * 70)
    print("VALTRIXA REVENUE FORECASTING MODEL")
    print("=" * 70)

    data = load_data()

    X, y, features = prepare_data(
        data
    )

    (
        X_train,
        X_test,
        y_train,
        y_test
    ) = time_based_split(
        X,
        y
    )

    model = train_model(
        X_train,
        y_train
    )

    metrics = evaluate_model(
        model,
        X_test,
        y_test
    )

    save_model(
        model,
        metrics,
        features
    )

    print("\n" + "=" * 70)
    print("REVENUE FORECASTING COMPLETED")
    print("=" * 70)


if __name__ == "__main__":
    main()