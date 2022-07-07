// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

//  <ul class="#ingridients">
//   <li class="item" >Potatoes</li>
//   <li class="item" >Mushrooms</li>
//   <li class="item" >Garlic</li>
//   <li class="item" >Tomatos</li>
//   <li class="item" >Herbs</li>
//   <li class="item" >Condiments</li>
//  </ul>


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const fn = () => {
  ingredients.forEach(ingridient => {
    let listOfIngridients = document.querySelector('#ingredients');

  for (let i = 1; i <= 1; i+=1) {
    let li = document.createElement('li');
    li.innerHTML = ingridient;
    listOfIngridients.appendChild(li);
    li.classList.add('item')
  }
  });
}

fn()
