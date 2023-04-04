let counterValue = 0;

const box = document.querySelector("#counter");
const counterEl = document.querySelector("#value");
const buttonDecr = document.querySelector("[data-action='decrement']");
const buttonIncr = document.querySelector("[data-action='increment']");

function onPlus() {
  console.dir("Add:", (counterValue += 1));

  document.getElementById("value").textContent = counterValue;
}

function onSubtract() {
  console.dir("Remove:", (counterValue -= 1));

  document.getElementById("value").textContent = counterValue;
}

buttonIncr.addEventListener("click", onPlus);
buttonDecr.addEventListener("click", onSubtract);

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
