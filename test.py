import pandas as pd
import numpy as np


def get_rate():
    url = "https://rate.bot.com.tw/xrt/flcsv/0/day"
    df = pd.read_csv(url).iloc[:, [2, 12]]
    new_columns = {"": "幣別", "現金": "即期買入", "現金.1": "即期賣出"}
    df = df.rename(columns=new_columns)
    df["原幣兌台幣"] = df.mean(axis=1)
    # 先指定好要操作的欄位名稱
    cal_column = "原幣兌台幣"
    # 找到指定操作欄位的第一個數字
    first_value = df[cal_column].iloc[0]
    # 將要操作的那欄每一個數字除以第一個數字，並將結果放在新的一欄中
    df["原幣兌美元"] = df[cal_column] / first_value
    return df


print(get_rate())
