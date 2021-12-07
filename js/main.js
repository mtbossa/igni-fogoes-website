// Variables
/* ScrollReveal: show elements when scrolling */
const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})
const $header = document.querySelector('.header')
const $sections = document.querySelectorAll('section[id]')
const navHeight = $header.offsetHeight

// Functions
/* Open and close the menu */
const showCloseMenu = () => {
	const $navbarList = document.querySelector('.navbar__list')
	const $buttonOpenMenu = document.querySelector('.navbar__button-open')
	const $buttonCloseMenu = document.querySelector('.navbar__button-close')
	const $menuLinks = document.querySelectorAll('.navbar__link')

	$buttonOpenMenu.addEventListener('click', () => {
		$navbarList.classList.toggle('navbar__list--visible')
		$buttonCloseMenu.classList.toggle('navbar__button-close--visible')
	})

	$buttonCloseMenu.addEventListener('click', () => {
		$navbarList.classList.toggle('navbar__list--visible')
		$buttonCloseMenu.classList.toggle('navbar__button-close--visible')
	})

	$menuLinks.forEach($element => {
		$element.addEventListener('click', () => {
			$navbarList.classList.toggle('navbar__list--visible')
			$buttonCloseMenu.classList.toggle('navbar__button-close--visible')
		})
	})
}

/* Scroll shadow */
const scrollShadow = () => {
	window.scrollY >= navHeight
		? $header.classList.add('header--shadow')
		: $header.classList.remove('header--shadow')
}

const activateMenuAtCurrentSection = () => {
	const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

	$sections.forEach($element => {
		const sectionTop = $element.offsetTop
		const sectionHeight = $element.offsetHeight
		const sectionId = $element.getAttribute('id')

		const checkpointStart = checkpoint >= sectionTop
		const checkpointEnd = checkpoint <= sectionTop + sectionHeight

		if(checkpointStart && checkpointEnd) {
			document
				.querySelector(`.navbar__link[href*=${sectionId}]`)
				.classList.add('navbar__link--active')
		} else {
			document
			.querySelector(`.navbar__link[href*=${sectionId}]`)
			.classList.remove('navbar__link--active')
		}
	})
}

// Execution
window.addEventListener('scroll', () => {
	scrollShadow()
	activateMenuAtCurrentSection()
})

showCloseMenu()

scrollReveal.reveal(
	`
  		.section__image, .button, .service-card
		`,
	{
		interval: 100
	}
)
