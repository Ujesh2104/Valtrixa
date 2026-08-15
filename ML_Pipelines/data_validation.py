from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent
RAW_DATA_DIR = BASE_DIR / "datasets" / "raw"


DATASETS = [
    "sales.csv",
    "catalog.csv",
    "stores.csv",
    "price_history.csv",
    "discounts_history.csv",
    "markdowns.csv",
    "online.csv",
    "actual_matrix.csv",
]


def load_dataset(file_name: str) -> pd.DataFrame:
    file_path = RAW_DATA_DIR / file_name

    if not file_path.exists():
        raise FileNotFoundError(
            f"Dataset not found: {file_path}"
        )

    return pd.read_csv(file_path)


def validate_dataset(file_name: str, dataframe: pd.DataFrame) -> None:
    print("\n" + "=" * 80)
    print(f"VALIDATING: {file_name}")
    print("=" * 80)

    rows, columns = dataframe.shape

    print(f"Rows    : {rows:,}")
    print(f"Columns : {columns}")

    print("\nColumn Information:")
    print("-" * 80)

    for column in dataframe.columns:
        data_type = dataframe[column].dtype
        missing = dataframe[column].isnull().sum()
        unique = dataframe[column].nunique()

        print(
            f"{column:<30}"
            f"Type: {str(data_type):<12}"
            f"Missing: {missing:<10}"
            f"Unique: {unique:,}"
        )

    duplicate_count = dataframe.duplicated().sum()

    print("\nDuplicate Rows:")
    print(f"{duplicate_count:,}")

    print("\nSample Records:")
    print(dataframe.head(3).to_string(index=False))

    print("\n")


def main():
    print("=" * 80)
    print("VALTRIXA DATA VALIDATION PIPELINE")
    print("=" * 80)

    successful = 0
    failed = 0

    for file_name in DATASETS:

        try:
            dataframe = load_dataset(file_name)

            validate_dataset(
                file_name,
                dataframe
            )

            successful += 1

        except Exception as error:
            failed += 1

            print("\n" + "=" * 80)
            print(f"FAILED: {file_name}")
            print("=" * 80)
            print(error)

    print("=" * 80)
    print("VALIDATION SUMMARY")
    print("=" * 80)

    print(f"Successfully processed : {successful}")
    print(f"Failed                 : {failed}")

    print("=" * 80)


if __name__ == "__main__":
    main()