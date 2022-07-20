// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// {/* <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы. */}




const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];





  // const newArr = images.reduce((image, value) => {

  //   const img = document.createElement('img')
  //   const li = document.createElement('li')
  //   document.querySelector('.gallery').appendChild(li).append(img);
  //   return img.insertAdjacentHTML("beforebegin", `<img src="${value.url}" alt="${value.alt}">`)
  // }, " ")

  // console.log(newArr)


// таск 3 на галерее или мап + джойн и сразу шаблонная ли с классо и картинкой или редьюсс с аккумом пустой стркой


// const fn = () =>{
  // const newImg = images.map(image => image).join()
  // const img = document.createElement('img')
  // const li = document.createElement('li')
  // document.querySelector('.gallery').appendChild(li).append(img);


  // return newImg.insertAdjacentHTML(("beforebegin", `<img src="${image.url}" alt="${image.alt}">`))


  const destructImages = destruct => {
    const { url, alt } = destruct
    
    return `<li><img class="gallery-list" src="${url}" alt="${alt}"/></li>`
}

const imgEl = document.querySelector('.gallery');
const addImage = images.map(destructImages).join('');


imgEl.insertAdjacentHTML("afterbegin", addImage);


  // return `
  // <img src="${image.url}" alt="${image.alt}">`
// }
// fn ()