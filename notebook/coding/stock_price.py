# filename: stock_price.py

import akshare as ak
import matplotlib.pyplot as plt
import pandas as pd

# 获取股票数据
stock_zh_a_daily_df_601318 = ak.stock_zh_a_daily(symbol="sh601318", adjust="qfq")  # 平安
stock_zh_a_daily_df_601601 = ak.stock_zh_a_daily(symbol="sh601601", adjust="qfq")  # 太保
stock_zh_a_daily_df_601628 = ak.stock_zh_a_daily(symbol="sh601628", adjust="qfq")  # 中国人寿

# 将date列转换为日期类型
stock_zh_a_daily_df_601318['date'] = pd.to_datetime(stock_zh_a_daily_df_601318['date'])
stock_zh_a_daily_df_601601['date'] = pd.to_datetime(stock_zh_a_daily_df_601601['date'])
stock_zh_a_daily_df_601628['date'] = pd.to_datetime(stock_zh_a_daily_df_601628['date'])

# 选择2023年的数据
stock_zh_a_daily_df_601318 = stock_zh_a_daily_df_601318[stock_zh_a_daily_df_601318.date.dt.year == 2023]
stock_zh_a_daily_df_601601 = stock_zh_a_daily_df_601601[stock_zh_a_daily_df_601601.date.dt.year == 2023]
stock_zh_a_daily_df_601628 = stock_zh_a_daily_df_601628[stock_zh_a_daily_df_601628.date.dt.year == 2023]

# 绘制图表
plt.figure(figsize=(12, 8))
plt.plot(stock_zh_a_daily_df_601318.date, stock_zh_a_daily_df_601318['close'], label='Ping An')
plt.plot(stock_zh_a_daily_df_601601.date, stock_zh_a_daily_df_601601['close'], label='Tai Bao')
plt.plot(stock_zh_a_daily_df_601628.date, stock_zh_a_daily_df_601628['close'], label='China Life')
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Stock Price in 2023')
plt.legend()
plt.grid(True)
plt.xticks(rotation=45)

# 保存图表
plt.savefig('stock_price_ytd.png')