# filename: stock_comparison.py

import akshare as ak
import pandas as pd
from datetime import datetime, timedelta

# Get yesterday's date
yesterday = datetime.now() - timedelta(1)
print(f"Yesterday's date was: {yesterday.strftime('%Y-%m-%d')}")

# Get stock data for 601318 and 601601
stock_zh_a_daily_df_601318 = ak.stock_zh_a_daily(symbol="sh601318", adjust="qfq")
stock_zh_a_daily_df_601601 = ak.stock_zh_a_daily(symbol="sh601601", adjust="qfq")

# Print the first few rows of the stock dataframes
print("First few rows of the dataframe for stock 601318:")
print(stock_zh_a_daily_df_601318.head())
print("First few rows of the dataframe for stock 601601:")
print(stock_zh_a_daily_df_601601.head())