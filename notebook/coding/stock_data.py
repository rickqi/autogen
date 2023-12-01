# filename: stock_data.py

import akshare as ak
import matplotlib.pyplot as plt
import pandas as pd
from datetime import datetime, timedelta

# 获取当前日期
current_date = datetime.now()

# 计算一年前的日期
one_year_ago = current_date - timedelta(days=365)

# 获取股票数据
stock_hfq_df1 = ak.stock_zh_a_daily(symbol="sh601318", adjust="hfq")  # 平安
stock_hfq_df2 = ak.stock_zh_a_daily(symbol="sh601601", adjust="hfq")  # 太保
stock_hfq_df3 = ak.stock_zh_a_daily(symbol="sh601628", adjust="hfq")  # 中国人寿

# 选择最近一年的数据
stock_hfq_df1 = stock_hfq_df1.loc[one_year_ago.strftime('%Y-%m-%d'):current_date.strftime('%Y-%m-%d')]
stock_hfq_df2 = stock_hfq_df2.loc[one_year_ago.strftime('%Y-%m-%d'):current_date.strftime('%Y-%m-%d')]
stock_hfq_df3 = stock_hfq_df3.loc[one_year_ago.strftime('%Y-%m-%d'):current_date.strftime('%Y-%m-%d')]

# 绘制图表
plt.figure(figsize=(10, 5))
plt.plot(stock_hfq_df1.index, stock_hfq_df1['close'], label='Ping An')
plt.plot(stock_hfq_df2.index, stock_hfq_df2['close'], label='Taibao')
plt.plot(stock_hfq_df3.index, stock_hfq_df3['close'], label='China Life')
plt.xlabel('Date')
plt.ylabel('Close Price')
plt.title('Stock Price in the Last Year')
plt.legend()
plt.grid(True)
plt.savefig('stock_price_ytd.png')

# 保存数据
with pd.ExcelWriter('stock_price.xlsx') as writer:
    stock_hfq_df1.to_excel(writer, sheet_name='Ping An')
    stock_hfq_df2.to_excel(writer, sheet_name='Taibao')
    stock_hfq_df3.to_excel(writer, sheet_name='China Life')