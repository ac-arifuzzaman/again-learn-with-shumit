// select the dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

const counter2El = document.getElementById("counter2");
const increment2El = document.getElementById("increment2");
const decrement2El = document.getElementById("decrement2");

// initial state
let counter = 0;
let counter2 = 455;

// event handler
incrementEl.addEventListener("click", () => {
  counter++;
  counterEl.innerText = counter;
});

decrementEl.addEventListener("click", () => {
  counter--;
  counterEl.innerText = counter;
});

// event listner 2
increment2El.addEventListener("click", () => {
  counter2++;
  counter2El.innerText = counter2;
});

decrement2El.addEventListener("click", () => {
  counter2--;
  counter2El.innerText = counter2;
});
