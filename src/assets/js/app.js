let tabsNav = document.querySelector('.nav') // Родитель линков
let tabsCategory = document.querySelector('.category') // Родитель таб-контента
let navLink = tabsNav.querySelectorAll('.nav__item')   // Линки
let items = tabsCategory.querySelectorAll('.category__items') // Таб-контент

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
