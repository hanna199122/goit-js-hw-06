const input = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

input.addEventListener("input", onChangeInputRange);

function onChangeInputRange(evt) {
  const currentValue = evt.currentTarget.value;

  console.log(currentValue);

  span.style.fontSize = currentValue + "px";
}
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
