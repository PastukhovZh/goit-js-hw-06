// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const input = document.querySelector("input")
// const inputEmail = document.getAtribute('')
const form = document.querySelector('.login-form');
const btn = document.querySelector('.login-form > button')

input.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
  // console.log(`Тут написано : ${event.currentTarget.value.length}`)

  event.preventDefault();
if( event.currentTarget.value.length === 0) {
 alert('Hey man, you must write at least something :/ ');
}
{
    
    const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    console.log(name);
    console.log(value);
  }
)}
}
