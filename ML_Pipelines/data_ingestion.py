from pathlib import Path
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent

RAW_DATA_DIR = BASE_DIR / "datasets" / "raw"


DATASETS = {
    "sales": "sales.csv",
    "catalog": "catalog.csv",
    "stores": "stores.csv",
    "price_history": "price_history.csv",
    "discounts_history": "discounts_history.csv",
    "markdowns": "markdowns.csv",
    "online": "online.csv",
    "actual_matrix": "actual_matrix.csv",
}


def load_dataset(file_name):
    file_path = RAW_DATA_DIR / file_name

    if not file_path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {file_path}"
        )

    return pd.read_csv(file_path)


def inspect_dataset(name, dataframe):
    print("\n" + "=" * 70)
    print(f"DATASET: {name.upper()}")
    print("=" * 70)

    print(f"Rows       : {dataframe.shape[0]:,}")
    print(f"Columns    : {dataframe.shape[1]}")

    print("\nColumns:")
    for column in dataframe.columns:
        print(f"  - {column}")

    print("\nData Types:")
    print(dataframe.dtypes)

    print("\nMissing Values:")
    missing_values = dataframe.isnull().sum()

    missing_values = missing_values[
        missing_values > 0
    ].sort_values(ascending=False)

    if missing_values.empty:
        print("  No missing values")
    else:
        print(missing_values)

    print("\nDuplicate Rows:")
    print(f"  {dataframe.duplicated().sum():,}")

    print("\nFirst 5 Rows:")
    print(dataframe.head())


def main():
    print("\nVALTRIXA DATA INGESTION PIPELINE")
    print("=" * 70)

    loaded_datasets = {}

    for dataset_name, file_name in DATASETS.items():

        try:
            dataframe = load_dataset(file_name)

            loaded_datasets[dataset_name] = dataframe

            inspect_dataset(
                dataset_name,
                dataframe
            )

        except Exception as error:
            print(
                f"\nERROR loading {dataset_name}: {error}"
            )

    print("\n" + "=" * 70)
    print("DATA INGESTION COMPLETED")
    print("=" * 70)

    print("\nSuccessfully Loaded:")

    for dataset_name, dataframe in loaded_datasets.items():
        print(
            f"{dataset_name:<20} "
            f"{dataframe.shape[0]:>10,} rows  "
            f"{dataframe.shape[1]:>4} columns"
        )


if __name__ == "__main__":
    main()