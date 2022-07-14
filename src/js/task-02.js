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


// По таску 2 на ингридиентах.реддьюс(ингридиент => cоздаем ли, через тексКонтент добавляем ингридиент, добавляем клас и возвращаем, аккум это массив )  у нас получился список и за 1 действие распыления помещаем все в разметку
// на каждом шаге цикла не добавляем
// редьюс вам создал масиив наполненных лишек и теперь нам необходимо этот массив за 1 дейсвтие добавить в разметку - потому и используем расспыление

/////////////////////////////////////////////////////////////////
const ingredientsList = document.querySelector('#ingredients');
const arrayIngredient = ingredients.reduce((acc, ingredient) => {
  const ingredientListItem = document.createElement('li');
  ingredientListItem.classList.add('item');
  ingredientListItem.textContent = ingredient;
  
  acc.push(ingredientListItem);
  
  return acc;
}
  , []);
ingredientsList.append(...arrayIngredient)
console.log(arrayIngredient);


////////////////////////////////////////////////////////////////////


// const arrayOfProducts = ingredients.reduce((start, ingredient) => [
//   // const li = document.createElement('li');
//   // li.classList.add('item');

//   // // document.querySelector('#ingredients').appendChild(li).append(ingredient)
//   // return [...start, ...ingredient]
//   ...start, ...ingredient
// ], []);




// const fn = () => {
//   const final = ingredients.reduce((ingridient, top) => {
//     const li = document.createElement('li');
//   const newEl = document.querySelector('#ingredients').appendChild(li);
//     li.classList.add('item')
//     console.log(newEl.append(top))
//   }, 0)
//   return final
// }

// fn()

