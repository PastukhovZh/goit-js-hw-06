// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.



const scrollBar = document.querySelector('#font-size-control');
const textZoom = document.querySelector('#text');

scrollBar.addEventListener('input', changeValuePx)

function changeValuePx() {
    textZoom.style.fontSize = this.value + 'px';
}


console.log()