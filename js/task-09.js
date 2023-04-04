function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector("span");
const bodyEl = document.getElementsByName("body");

// console.log(bodyEl);

button.addEventListener("click", changeColor);

function changeColor(event) {
  // console.log(span.textContent);
  let backgroundColor = (document.getElementsByName(
    "body"
  ).style.backgroundColor = getRandomHexColor);
  console.log(backgroundColor);
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
