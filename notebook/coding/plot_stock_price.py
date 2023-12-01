# filename: plot_stock_price.py

import matplotlib.pyplot as plt
import yfinance as yf

# Download the data for META and TESLA
meta = yf.Ticker("META")
tesla = yf.Ticker("TSLA")

# Get the historical data for this year
meta_data = meta.history(start='2023-01-01')
tesla_data = tesla.history(start='2023-01-01')

# Plot the stock price changes
plt.figure(figsize=(14, 7))
plt.plot(meta_data['Close'], label='META')
plt.plot(tesla_data['Close'], label='TESLA')
plt.title('Stock Price Change YTD for META and TESLA')
plt.xlabel('Date')
plt.ylabel('Price')
plt.legend()
plt.grid(True)

# Save the plot to a file
plt.savefig('stock_price_ytd.png')