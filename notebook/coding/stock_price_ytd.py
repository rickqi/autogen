# filename: stock_price_ytd.py

import akshare as ak
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Get yesterday's date
yesterday = datetime.now() - timedelta(1)
print(f"Yesterday's date was: {yesterday.strftime('%Y-%m-%d')}")

# Get stock data for the year to date
start_date = datetime(datetime.now().year, 1, 1).strftime('%Y-%m-%d')
end_date = yesterday.strftime('%Y-%m-%d')

stock_codes = ['601318', '601601']

plt.figure(figsize=(10, 6))

for code in stock_codes:
    try:
        stock_df = ak.stock_zh_a_minute(symbol=code, period='60', adjust="qfq")
        stock_df['close'] = pd.to_numeric(stock_df['close'])
        stock_df['date'] = pd.to_datetime(stock_df['date'])
        stock_df = stock_df.set_index('date')
        stock_df = stock_df.loc[start_date:end_date]
        stock_df['close'].plot(label=code)
    except Exception as e:
        print(f"Error occurred while fetching data for stock {code}: {str(e)}")

plt.legend()
plt.title('Stock Price Change YTD')
plt.xlabel('Date')
plt.ylabel('Closing Price')
plt.grid(True)
plt.savefig('stock_price_ytd.png')