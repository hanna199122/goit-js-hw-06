const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

// console.log(dataLength);

input.addEventListener("blur", onInputChange);

function onInputChange(evt) {
  // if (evt.currentTarget)
  if (
    evt.currentTarget.value.length < dataLength ||
    evt.currentTarget.value.length > dataLength
  ) {
    input.classList.add("invalid");
  } else if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }

  console.log(evt.currentTarget.value.length);
  console.log(Number(dataLength));
  console.log(Number(dataLength) === evt.currentTarget.value.length);
}

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

//   console.log(typeof evt.currentTarget.value.length);
//   console.log(typeof Number(evt.currentTarget.dataset.length));

// та у 6 завданні прописати правильну умову , адже у імпуті мають бути введено 6 символів, має додаватись клас valid.Чекаю вашу доопрацбовану роботу!
