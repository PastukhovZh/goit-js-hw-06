// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColorBtnClick = document.querySelector('.change-color')
const spanColorResult = document.querySelector('.color')


function getRandomHex() {
}

randomColorBtnClick.addEventListener('click', getRandomHexColor)