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

const exbaseEl = document.querySelector(".amount")
exbaseEl.addEventListener("input", exbaseForm);
const rateData = {};
async function getRate() {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const data = await res.json();
    // rateData["CNY"] = data.rates["CNY"];
    console.log(data);

}

function exbaseForm() {
    const exchangeRate = rateData[exchangeEl.value];
    if (exchangeRate !== undefined) {
        exbaseEl.value = (Number(this.value) * Number(rateData[exchangeEl.value])).toFixed(2);
    }
}


getRate();



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

