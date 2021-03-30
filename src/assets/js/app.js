// Табы для сайдбара

let tabsNav = document.querySelector('.nav') // Родитель линков
let tabsContentNav = document.querySelector('.category') // Родитель таб-контента
let navLinkNav = tabsNav.querySelectorAll('.nav__item') // Линки
let itemsTabs = tabsContentNav.querySelectorAll('.category__items') // Таб-контент

// Добавил тег is-active
function isActive(arr, i) {
  arr.forEach(item => {
    item.forEach(i => {
      i.classList.remove('is-active')
    })
    item[i].classList.add('is-active')
  })
}

// Перебираем элементы ссылок
for (let i = 0; i < navLinkNav.length; i++) {
  navLinkNav[i].addEventListener('click', () => {
    isActive([navLinkNav, itemsTabs], i)
  })
}

// Табы выбора карточек

let tabsNavCards = document.querySelector('.cards-slider') // Родитель линков
let tabsContentCards = document.querySelector('.cards__content') // Родитель таб-контента
let navLinkCards = tabsNavCards.querySelectorAll('.cards-slider__slide') // Линки
let itemsCards = tabsContentCards.querySelectorAll('.category__item') // Таб-контент


for (let i = 0; i < navLinkCards.length; i++) {
  navLinkCards[i].addEventListener('click', () => {
    isActive([navLinkCards, itemsCards], i)
  })
}



// БУРГЕР

// const burger = document.getElementById('burger');
// const sidebar = document.getElementById('sidebar');
// const page = document.getElementById('page');
// const body = document.body;

// // Когда кликаем на бургер-проверяем, есть ли у body класс show-sidebar, если класс есть - мы вызываем
// // closeSidebar (убирается show-sidebar у body и убирается маска, которая была создана ),
// // а если show-sidebar нету у body то showSidebar(создаем маску, добавляем ее в page и выдаем body - show-sidebar )

// burger.addEventListener('click', event => {
//   if (body.classList.contains('show-sidebar')) {
//     closeSidebar();
//   } else {
//     showSidebar();
//   }

// });


// function showSidebar() {
//   let mask = document.createElement('div');
//   mask.classList.add('page__mask');
//   mask.addEventListener('click', closeSidebar);
//   page.appendChild(mask);

//   body.classList.add('show-sidebar');
// }


// function closeSidebar() {
//   body.classList.remove('show-sidebar');
//   document.querySelector('.page__mask').remove();
// }

