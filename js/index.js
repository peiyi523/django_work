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








function getCurrentTime() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let currentTimeStr = year + "年" + month + "月" + day + "日" + " " + hours + ":" + minutes;
    return currentTimeStr;

}

function updateClock() {
    let timeEl = document.getElementById("time");
    if (timeEl) {
        timeEl.innerHTML = getCurrentTime();
    }
}

updateClock();

