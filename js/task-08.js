const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  console.log("No reloading", event.preventDefault());

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim;
  const password = formElements.password.value.trim;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email,
      password,
    };

    console.log("Email:", email);
    console.log("Password:", password);
    form.reset();
  }
}
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
