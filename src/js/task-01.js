// 1. Перебрать и найти li в ul#categories;
// 2. Вывести в консоль количесвто h2 в li;
// 3. Перебрать и найти ul в li;
// 4. Вывести в консоль количество li в ul;


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const numbersOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numbersOfCategories.length}`);


const listOfCategoriesItems = document.querySelectorAll('.item');


const firstTitleCategories = numbersOfCategories[0].querySelector('h2').textContent;

const firstElementOfList = listOfCategoriesItems[0].childNodes[3].children.length;

console.log(`Elements: ${firstElementOfList}`);

console.log(`Category: ${firstTitleCategories}`);



const secondTitleCategories = numbersOfCategories[1].querySelector('h2').textContent;


const seondElementOfList = listOfCategoriesItems[1].childNodes[3].children.length;

console.log(`Elements: ${seondElementOfList}`);

console.log(`Category: ${secondTitleCategories}`);


const thirdTitleCategories = numbersOfCategories[2].querySelector('h2').textContent;


const thirdElementOfList = listOfCategoriesItems[2].childNodes[3].children.length;

console.log(`Elements: ${thirdElementOfList}`);

console.log(`Category: ${thirdTitleCategories}`);




