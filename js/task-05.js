const input = document.querySelector("#name-input");

const text = document.querySelector("#name-output");

input.addEventListener("input", onInput);
// console.log(input);

function onInput(event) {
  text.textContent = event.currentTarget.value;

  console.log(event);
}
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
