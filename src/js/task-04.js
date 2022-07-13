// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.




const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}


const  onDecrement  =document.querySelector('[data-action="decrement"]');
const  onIncrement = document.querySelector('[data-action="increment"]');
const   onValue = document.querySelector('#value');




onDecrement.addEventListener('click', function() {
    counterValue.decrement();
    onValue.textContent = counterValue.value;
});
onIncrement.addEventListener('click', function () {
    counterValue.increment();
    onValue.textContent = counterValue.value;
});