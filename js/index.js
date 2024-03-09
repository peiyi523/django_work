const amountEl = document.querySelector("#amount");
const exchangeEl = document.querySelector("#exchange");
const baseEl = document.querySelector("#base");
const convertEl = document.querySelector("#convert");
const resetEl = document.querySelector("#reset")


console.log(convertEl, amountEl, exchangeEl, baseEl);

convertEl.addEventListener("click", convertExchange);

function convertExchange() {
    let amount = amountEl.value;
    let exchange = exchangeEl.value;
    let base = baseEl.value;
    console.log(amount, exchange, base);
    document.querySelector(".examount").innerHTML = amount;
    document.querySelector(".exchange").innerHTML = exchange;
    document.querySelector(".exbase").innerHTML = getRate()
    document.querySelector(".base").innerHTML = base;
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "flex";
    }, 500);

    if (amount == "") {
        alert("請輸入金額");
        return;
    }
    if (exchange == "") {
        alert("請輸入兌換幣別");
        return;
    }
    if (base == "") {
        alert("請輸入基礎幣別");
        return;
    }
}
resetEl.addEventListener("click", resetForm);
function resetForm() {
    amountEl.value = "";
    exchangeEl.value = "";
    baseEl.value = "";
}

// exbase的python函式
// function get_rate() {
//     let url = "https://rate.bot.com.tw/xrt/flcsv/0/day";
//     let df = pd.read_csv(url).iloc[:, [2, 12]];
//     let new_columns = { "": "幣別", "現金": "即期買入", "現金.1": "即期賣出" };
//     let df = df.rename(columns = new_columns);
//     let df["原幣兌台幣"] = df.mean(axis = 1);
//     // 先指定好要操作的欄位名稱
//     let cal_column = "原幣兌台幣";
//     // 找到指定操作欄位的第一個數字
//     let first_value = df[cal_column].iloc[0];
//     // 將要操作的那欄每一個數字除以第一個數字，並將結果放在新的一欄中
//     let df["原幣兌美元"] = df[cal_column] / first_value;
//     df_list = df.values.tolist();
//     console.log(datas);
//     return df_list;



async function getRate() {
    const url = "https://rate.bot.com.tw/xrt/flcsv/0/day";
    const response = await fetch(url);
    const data = await response.text();

    // Convert CSV to JSON
    const jsonData = Papa.parse(data, { header: true });
    const currencies = jsonData.data.map(entry => ({
        '幣別': entry[''],
        '即期買入': parseFloat(entry['現金']),
        '即期賣出': parseFloat(entry['現金.1'])
    }));

    // Calculate original currency to TWD exchange rate
    const firstValue = currencies[0]['原幣兌台幣'];
    currencies.forEach(currency => {
        currency['原幣兌美元'] = currency['原幣兌台幣'] / firstValue;
    });

    // Extract relevant data
    const newData = currencies.map(currency => ({ '原幣兌美元': currency['原幣兌美元'] }));

    // Convert JSON to string
    const jsonString = JSON.stringify(newData);
    return jsonString;
}














function getCurrentTime() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let currentTimeStr = year + "年" + month + "月" + day + "日" + " " + hours + ":" + minutes + ":" + seconds;
    return currentTimeStr;

}

function updateClock() {
    let timeEl = document.getElementById("time");
    if (timeEl) {
        timeEl.innerHTML = getCurrentTime();
    }
}
setInterval(updateClock, 1000);

updateClock();

