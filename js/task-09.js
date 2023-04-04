function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector("span");

// console.log(bodyEl);

button.addEventListener("click", changeColor);

function changeColor() {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
