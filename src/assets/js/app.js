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