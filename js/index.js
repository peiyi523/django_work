const amountEl = document.querySelector("#amount");
const exchangeEl = document.querySelector("#exchange");
const baseEl = document.querySelector("#base");
const convertEl = document.querySelector("#convert")

console.log(convertEl, amountEl, exchangeEl, baseEl);

convertEl.addEventListener("click", convertExchange);

function convertExchange() {
    let amount = amountEl.value;
    let exchange = exchangeEl.value;
    let base = baseEl.value;

    console.log(amount, exchange, base);

}