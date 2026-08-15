from pathlib import Path

import numpy as np
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent

RAW_DATA_DIR = BASE_DIR / "datasets" / "raw"
PROCESSED_DATA_DIR = BASE_DIR / "datasets" / "processed"

PROCESSED_DATA_DIR.mkdir(
    parents=True,
    exist_ok=True
)


def load_csv(file_name: str) -> pd.DataFrame:
    file_path = RAW_DATA_DIR / file_name

    if not file_path.exists():
        raise FileNotFoundError(
            f"Required dataset not found: {file_path}"
        )

    print(f"Loading: {file_name}")

    dataframe = pd.read_csv(
        file_path,
        low_memory=False
    )

    dataframe.columns = (
        dataframe.columns
        .str.strip()
    )

    if "Unnamed: 0" in dataframe.columns:
        dataframe = dataframe.drop(
            columns=["Unnamed: 0"]
        )

    return dataframe


def load_datasets():

    sales = load_csv("sales.csv")

    online = load_csv("online.csv")

    catalog = load_csv("catalog.csv")

    discounts = load_csv(
        "discounts_history.csv"
    )

    markdowns = load_csv(
        "markdowns.csv"
    )

    price_history = load_csv(
        "price_history.csv"
    )

    return {
        "sales": sales,
        "online": online,
        "catalog": catalog,
        "discounts": discounts,
        "markdowns": markdowns,
        "price_history": price_history,
    }


def prepare_sales_data(sales):

    print("\nPreparing sales data...")

    required_columns = [
        "date",
        "item_id",
        "quantity",
        "price_base",
        "sum_total",
        "store_id",
    ]

    missing_columns = [
        column
        for column in required_columns
        if column not in sales.columns
    ]

    if missing_columns:
        raise ValueError(
            "Missing columns in sales.csv: "
            f"{missing_columns}"
        )

    sales = sales[
        required_columns
    ].copy()

    sales["date"] = pd.to_datetime(
        sales["date"],
        errors="coerce"
    )

    sales["quantity"] = pd.to_numeric(
        sales["quantity"],
        errors="coerce"
    )

    sales["price_base"] = pd.to_numeric(
        sales["price_base"],
        errors="coerce"
    )

    sales["sum_total"] = pd.to_numeric(
        sales["sum_total"],
        errors="coerce"
    )

    sales = sales.dropna(
        subset=[
            "date",
            "item_id",
            "store_id"
        ]
    )

    sales["quantity"] = (
        sales["quantity"]
        .fillna(0)
    )

    sales["price_base"] = (
        sales["price_base"]
        .fillna(0)
    )

    sales["sum_total"] = (
        sales["sum_total"]
        .fillna(0)
    )

    sales = sales[
        sales["quantity"] >= 0
    ]

    print(
        f"Sales records: {len(sales):,}"
    )

    return sales


def aggregate_sales(sales):

    print("\nAggregating sales...")

    daily_sales = (
        sales
        .groupby(
            [
                "date",
                "item_id",
                "store_id",
            ],
            as_index=False
        )
        .agg(
            quantity=(
                "quantity",
                "sum"
            ),
            revenue=(
                "sum_total",
                "sum"
            ),
            price_base=(
                "price_base",
                "mean"
            ),
        )
    )

    daily_sales = daily_sales.sort_values(
        [
            "item_id",
            "store_id",
            "date",
        ]
    )

    print(
        f"Daily records: "
        f"{len(daily_sales):,}"
    )

    return daily_sales


def add_online_features(
    data,
    online
):

    print("\nAdding online sales features...")

    required_columns = [
        "date",
        "item_id",
        "quantity",
        "price_base",
        "sum_total",
        "store_id",
    ]

    available_columns = [
        column
        for column in required_columns
        if column in online.columns
    ]

    online = online[
        available_columns
    ].copy()

    online["date"] = pd.to_datetime(
        online["date"],
        errors="coerce"
    )

    online["quantity"] = pd.to_numeric(
        online["quantity"],
        errors="coerce"
    ).fillna(0)

    online["sum_total"] = pd.to_numeric(
        online["sum_total"],
        errors="coerce"
    ).fillna(0)

    online = online.dropna(
        subset=[
            "date",
            "item_id",
            "store_id",
        ]
    )

    online_daily = (
        online
        .groupby(
            [
                "date",
                "item_id",
                "store_id",
            ],
            as_index=False
        )
        .agg(
            online_quantity=(
                "quantity",
                "sum"
            ),
            online_revenue=(
                "sum_total",
                "sum"
            ),
        )
    )

    data = data.merge(
        online_daily,
        on=[
            "date",
            "item_id",
            "store_id",
        ],
        how="left"
    )

    data["online_quantity"] = (
        data["online_quantity"]
        .fillna(0)
    )

    data["online_revenue"] = (
        data["online_revenue"]
        .fillna(0)
    )

    return data


def add_catalog_features(
    data,
    catalog
):

    print("\nAdding product catalog features...")

    required_columns = [
        "item_id",
        "dept_name",
        "class_name",
        "subclass_name",
        "item_type",
        "weight_volume",
        "weight_netto",
        "fatness",
    ]

    available_columns = [
        column
        for column in required_columns
        if column in catalog.columns
    ]

    catalog = catalog[
        available_columns
    ].copy()

    catalog = catalog.drop_duplicates(
        subset=["item_id"]
    )

    data = data.merge(
        catalog,
        on="item_id",
        how="left"
    )

    return data


def add_discount_features(
    data,
    discounts
):

    print("\nAdding discount features...")

    discounts["date"] = pd.to_datetime(
        discounts["date"],
        errors="coerce"
    )

    numeric_columns = [
        "sale_price_before_promo",
        "sale_price_time_promo",
        "number_disc_day",
    ]

    for column in numeric_columns:

        if column in discounts.columns:
            discounts[column] = pd.to_numeric(
                discounts[column],
                errors="coerce"
            )

    discounts = discounts.dropna(
        subset=[
            "date",
            "item_id",
            "store_id",
        ]
    )

    discount_summary = (
        discounts
        .groupby(
            [
                "date",
                "item_id",
                "store_id",
            ],
            as_index=False
        )
        .agg(
            discount_price_before=(
                "sale_price_before_promo",
                "mean"
            ),
            discount_price_after=(
                "sale_price_time_promo",
                "mean"
            ),
            discount_days=(
                "number_disc_day",
                "max"
            ),
        )
    )

    discount_summary["discount_percentage"] = np.where(
        discount_summary[
            "discount_price_before"
        ] > 0,
        (
            (
                discount_summary[
                    "discount_price_before"
                ]
                -
                discount_summary[
                    "discount_price_after"
                ]
            )
            /
            discount_summary[
                "discount_price_before"
            ]
        ) * 100,
        0
    )

    discount_summary["has_discount"] = 1

    data = data.merge(
        discount_summary,
        on=[
            "date",
            "item_id",
            "store_id",
        ],
        how="left"
    )

    data["has_discount"] = (
        data["has_discount"]
        .fillna(0)
        .astype(int)
    )

    data["discount_percentage"] = (
        data["discount_percentage"]
        .fillna(0)
    )

    data["discount_days"] = (
        data["discount_days"]
        .fillna(0)
    )

    return data


def add_markdown_features(
    data,
    markdowns
):

    print("\nAdding markdown features...")

    markdowns["date"] = pd.to_datetime(
        markdowns["date"],
        errors="coerce"
    )

    markdowns["normal_price"] = pd.to_numeric(
        markdowns["normal_price"],
        errors="coerce"
    )

    markdowns["price"] = pd.to_numeric(
        markdowns["price"],
        errors="coerce"
    )

    markdowns["quantity"] = pd.to_numeric(
        markdowns["quantity"],
        errors="coerce"
    )

    markdowns = markdowns.dropna(
        subset=[
            "date",
            "item_id",
            "store_id",
        ]
    )

    markdown_summary = (
        markdowns
        .groupby(
            [
                "date",
                "item_id",
                "store_id",
            ],
            as_index=False
        )
        .agg(
            normal_price=(
                "normal_price",
                "mean"
            ),
            markdown_price=(
                "price",
                "mean"
            ),
            markdown_quantity=(
                "quantity",
                "sum"
            ),
        )
    )

    markdown_summary["markdown_percentage"] = np.where(
        markdown_summary[
            "normal_price"
        ] > 0,
        (
            (
                markdown_summary[
                    "normal_price"
                ]
                -
                markdown_summary[
                    "markdown_price"
                ]
            )
            /
            markdown_summary[
                "normal_price"
            ]
        ) * 100,
        0
    )

    markdown_summary["has_markdown"] = 1

    data = data.merge(
        markdown_summary,
        on=[
            "date",
            "item_id",
            "store_id",
        ],
        how="left"
    )

    data["has_markdown"] = (
        data["has_markdown"]
        .fillna(0)
        .astype(int)
    )

    data["markdown_percentage"] = (
        data["markdown_percentage"]
        .fillna(0)
    )

    data["markdown_quantity"] = (
        data["markdown_quantity"]
        .fillna(0)
    )

    return data


def add_price_features(
    data,
    price_history
):

    print("\nAdding price history features...")

    price_history["date"] = pd.to_datetime(
        price_history["date"],
        errors="coerce"
    )

    price_history["price"] = pd.to_numeric(
        price_history["price"],
        errors="coerce"
    )

    price_history = price_history.dropna(
        subset=[
            "date",
            "item_id",
            "store_id",
        ]
    )

    price_summary = (
        price_history
        .groupby(
            [
                "date",
                "item_id",
                "store_id",
            ],
            as_index=False
        )
        .agg(
            historical_price=(
                "price",
                "mean"
            )
        )
    )

    data = data.merge(
        price_summary,
        on=[
            "date",
            "item_id",
            "store_id",
        ],
        how="left"
    )

    data["historical_price"] = (
        data["historical_price"]
        .fillna(data["price_base"])
    )

    data["price_difference"] = (
        data["price_base"]
        -
        data["historical_price"]
    )

    data["price_difference_percentage"] = np.where(
        data["historical_price"] > 0,
        (
            data["price_difference"]
            /
            data["historical_price"]
        ) * 100,
        0
    )

    return data


def add_calendar_features(data):

    print("\nAdding calendar features...")

    data["year"] = (
        data["date"].dt.year
    )

    data["month"] = (
        data["date"].dt.month
    )

    data["quarter"] = (
        data["date"].dt.quarter
    )

    data["week_of_year"] = (
        data["date"]
        .dt.isocalendar()
        .week
        .astype(int)
    )

    data["day_of_week"] = (
        data["date"].dt.dayofweek
    )

    data["day_of_month"] = (
        data["date"].dt.day
    )

    data["is_weekend"] = (
        data["day_of_week"] >= 5
    ).astype(int)

    return data


def add_lag_features(data):

    print("\nCreating historical sales features...")

    group_columns = [
        "item_id",
        "store_id",
    ]

    grouped = data.groupby(
        group_columns,
        group_keys=False
    )

    for lag in [1, 7, 14, 28]:

        data[
            f"quantity_lag_{lag}"
        ] = (
            grouped["quantity"]
            .shift(lag)
        )

        data[
            f"revenue_lag_{lag}"
        ] = (
            grouped["revenue"]
            .shift(lag)
        )

    for window in [7, 14, 28]:

        data[
            f"quantity_rolling_mean_{window}"
        ] = (
            grouped["quantity"]
            .transform(
                lambda series:
                series.shift(1)
                .rolling(window)
                .mean()
            )
        )

        data[
            f"revenue_rolling_mean_{window}"
        ] = (
            grouped["revenue"]
            .transform(
                lambda series:
                series.shift(1)
                .rolling(window)
                .mean()
            )
        )

    return data


def add_growth_features(data):

    print("\nCreating growth features...")

    data["sales_growth_7"] = np.where(
        data["quantity_lag_7"] > 0,
        (
            (
                data["quantity_lag_1"]
                -
                data["quantity_lag_7"]
            )
            /
            data["quantity_lag_7"]
        ) * 100,
        0
    )

    data["revenue_growth_7"] = np.where(
        data["revenue_lag_7"] > 0,
        (
            (
                data["revenue_lag_1"]
                -
                data["revenue_lag_7"]
            )
            /
            data["revenue_lag_7"]
        ) * 100,
        0
    )

    return data


def create_targets(data):

    print("\nCreating forecasting targets...")

    group_columns = [
        "item_id",
        "store_id",
    ]

    grouped = data.groupby(
        group_columns,
        group_keys=False
    )

    future_demand = pd.Series(
        0.0,
        index=data.index
    )

    future_revenue = pd.Series(
        0.0,
        index=data.index
    )

    for step in range(1, 8):

        future_demand += (
            grouped["quantity"]
            .shift(-step)
            .fillna(0)
        )

        future_revenue += (
            grouped["revenue"]
            .shift(-step)
            .fillna(0)
        )

    data["future_7_day_demand"] = (
        future_demand
    )

    data["future_7_day_revenue"] = (
        future_revenue
    )

    return data


def clean_data(data):

    print("\nCleaning final dataset...")

    data = data.replace(
        [np.inf, -np.inf],
        np.nan
    )

    data = data.sort_values(
        [
            "item_id",
            "store_id",
            "date",
        ]
    )

    required_features = [
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
    ]

    data = data.dropna(
        subset=required_features
    )

    data = data.fillna(0)

    data = data.reset_index(
        drop=True
    )

    return data


def save_processed_data(data):

    output_path = (
        PROCESSED_DATA_DIR
        / "model_features.csv"
    )

    data.to_csv(
        output_path,
        index=False
    )

    print("\n" + "=" * 80)
    print("PROCESSED DATASET CREATED")
    print("=" * 80)

    print(
        f"File: {output_path}"
    )

    print(
        f"Rows: {len(data):,}"
    )

    print(
        f"Columns: {len(data.columns):,}"
    )


def main():

    print("=" * 80)
    print("VALTRIXA FEATURE ENGINEERING PIPELINE")
    print("=" * 80)

    datasets = load_datasets()

    data = prepare_sales_data(
        datasets["sales"]
    )

    data = aggregate_sales(
        data
    )

    data = add_online_features(
        data,
        datasets["online"]
    )

    data = add_catalog_features(
        data,
        datasets["catalog"]
    )

    data = add_discount_features(
        data,
        datasets["discounts"]
    )

    data = add_markdown_features(
        data,
        datasets["markdowns"]
    )

    data = add_price_features(
        data,
        datasets["price_history"]
    )

    data = add_calendar_features(
        data
    )

    data = add_lag_features(
        data
    )

    data = add_growth_features(
        data
    )

    data = create_targets(
        data
    )

    data = clean_data(
        data
    )

    save_processed_data(
        data
    )

    print("\nFeature engineering completed successfully.")


if __name__ == "__main__":
    main()