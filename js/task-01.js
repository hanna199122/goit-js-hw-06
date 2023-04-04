const categories = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");
const titleEl = document.querySelectorAll("h2");

console.log("Number of categories:", categories.children.length);

titleEl.forEach((item) => {
  console.log("Category:", item.textContent);
  console.log("Elements:", item.nextElementSibling.childElementCount);
});

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
