const amountEl = document.querySelector("#amount");
const exchangeEl = document.querySelector("#exchange");
const baseEl = document.querySelector("#base");
const convertEl = document.querySelector("#convert");
const resetEl = document.querySelector("#reset");
// console.log(convertEl, amountEl, exchangeEl, baseEl);

// 記錄匯率資料
let rateData = null;

// 更新即時時間
updateClock();
setInterval(updateClock, 1000);

// 轉換按鈕監聽
convertEl.addEventListener("click", convertExchange);

// 清除按鈕監聽
resetEl.addEventListener("click", () => {

    amountEl.value = "";
    exchangeEl.value = "";
    baseEl.value = "";
});

// 取得即時匯率
async function getRate() {
    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await res.json();
        rateData = data.rates;
    } catch (e) {
        alert(e);
    }
}

// 轉換匯率
async function convertExchange() {
    // 取得最新匯率資料
    if (rateData == null) {
        await getRate();
    }

    let amount = amountEl.value;
    let exchange = exchangeEl.value;
    let base = baseEl.value;
    console.log(amount, exchange, base, rateData);

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

    let selectedOption = exchangeEl.options[exchangeEl.selectedIndex];
    // 獲取選中的value
    let selectedValue = selectedOption.value;
    // 獲取選中的text(解析輸出文字用)
    let selectedText = selectedOption.text;
    console.log(selectedValue, selectedText);
    // 取得對應匯率
    const exchangeRate = rateData[selectedValue];
    if (exchangeRate == undefined) {
        return;
    }

    // 計算結果跟幣別名稱
    let ans = (amount / exchangeRate).toFixed(2);
    // 加入仟分位
    let formatter = new Intl.NumberFormat('zh-Hant');
    let result = formatter.format(ans);
    let currency = selectedText.split(" ")[0];
    console.log(result, currency);
    displayResult(amount, base, currency, result);
}

// 顯示結果
function displayResult(amount, base, currency, result) {
    document.querySelector(".examount").innerHTML = amount;
    document.querySelector(".exchange").innerHTML = currency;
    document.querySelector(".base").innerHTML = base;
    document.querySelector(".exbase").innerHTML = result;


    // 隱藏跟顯示結果
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "flex";
    }, 500);
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




