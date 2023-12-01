# filename: stock_price_plot.py

import akshare as ak
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# Get yesterday's date
yesterday = datetime.now() - timedelta(1)

# Get stock data for the year to date
start_date = datetime(datetime.now().year, 1, 1).strftime('%Y-%m-%d')
end_date = yesterday.strftime('%Y-%m-%d')

stock_codes = ['601318', '601601']

plt.figure(figsize=(10, 6))

for code in stock_codes:
    try:
        stock_df = ak.stock_zh_a_hist(symbol=code, adjust="qfq")
        stock_df = stock_df[(stock_df['date'] >= start_date) & (stock_df['date'] <= end_date)]
        stock_df['close'] = pd.to_numeric(stock_df['close'])
        plt.plot(stock_df['date'], stock_df['close'], label=f'Stock {code}')
    except Exception as e:
        print(f"Error occurred while fetching data for stock {code}: {str(e)}")

plt.title('Year-to-Date Stock Price Change')
plt.xlabel('Date')
plt.ylabel('Closing Price')
plt.legend()
plt.grid(True)
plt.savefig('stock_price_ytd.png')