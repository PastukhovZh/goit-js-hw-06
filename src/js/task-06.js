// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const inputValue = document.querySelector('#validation-input');
const getAtributeLength = inputValue.getAttribute('data-length');



function onInputValueBlur() {

    if (inputValue.length !== getAtributeLength) {
    inputValue.classList.add('invalid');
    }
    if(inputValue.length === '6') {
        inputValue.classList.remove('invalid')
        inputValue.classList.add('valid');
        }
 return onInputValueBlur
// return getAtributeLength === inputValue.length ? valid : invalid
}
inputValue.addEventListener('blur', onInputValueBlur);


//////////////////////////////////////////////


// inputValue.addEventListener('input', onInputValue)




// function onInputValue(event) {
//     inputValue = event.currentTarget.value
//     return inputValue.length

//     function onInputValueBlur() {
//     if (onInputValue() === getAtributeLength) {
//         inputValue.classList.add('valid');
//     }
//     else {
//         inputValue.classList.add('invalid');
//     }
//         return 
// }
// }
