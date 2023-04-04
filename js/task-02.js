const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// console.log(ingredients);

const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.classList.add("item");
  console.log(itemEl);

  return itemEl;
});

listEl.append(...elements);

// ingredients.append(...elements);
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
