// Табы для сайдбара

let tabsNav = document.querySelector('.nav') // Родитель линков
let tabsContent = document.querySelector('.category') // Родитель таб-контента
let navLink = tabsNav.querySelectorAll('.nav__item')   // Линки
let items = tabsContent.querySelectorAll('.category__items') // Таб-контент

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('is-active')})
		item[i].classList.add('is-active')
	})
}

for(let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener('click', () => {
		change([navLink, items], i)
	})
}


// Табы выборка карточек

let tabsNav2 = document.querySelector('.cards-slider') // Родитель линков
let tabsContent2 = document.querySelector('.cards__content') // Родитель таб-контента
let navLink2 = tabsNav2.querySelectorAll('.cards-slider__slide')   // Линки
let items2= tabsContent2.querySelectorAll('.category__item') // Таб-контент

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('is-active')})
		item[i].classList.add('is-active')
	})
}

for(let i = 0; i < navLink2.length; i++) {
	navLink2[i].addEventListener('click', () => {
		change([navLink2, items2], i)
	})
}
