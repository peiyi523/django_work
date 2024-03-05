const amountEl = document.querySelector("#amount");
const exchangeEl = document.querySelector("#exchange");
const baseEl = document.querySelector("#base");
const convertEl = document.querySelector("#convert");


console.log(convertEl, amountEl, exchangeEl, baseEl);

convertEl.addEventListener("click", convertExchange);

function convertExchange() {
    let amount = amountEl.value;
    let exchange = exchangeEl.value;
    let base = baseEl.value;

    console.log(amount, exchange, base);
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

// 2024年3月4日 22:53