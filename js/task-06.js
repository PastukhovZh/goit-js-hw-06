// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
const inputValue = document.querySelector('#validation-input');
const getAtributeLength = inputValue.getAttribute('data-length');

inputValue.addEventListener('blur', onInputValueBlur);

function onInputValueBlur(event) {
    if (event.currentTarget.value.length === Number(getAtributeLength)) {
    inputValue.classList.add('valid');
    inputValue.classList.remove('invalid');
    }
    else {
        inputValue.classList.add('invalid')
        inputValue.classList.remove('valid');
}

}

console.log(inputValue)
