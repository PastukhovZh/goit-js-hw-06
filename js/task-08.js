// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);
const userData = {};  


function onFormSubmit(event) {
  const { elements: { email, password } } = event.currentTarget;

  // console.log(`Тут написано : ${email.value}`)

  event.preventDefault();
  if (email.value === '' || password.value === '') {
    return alert('Hey, this is wrong result. Please complete all fields!');
}
  {

    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {userData[name] = value;     });
    console.log(userData);

        event.currentTarget.reset();
    
  }
}
