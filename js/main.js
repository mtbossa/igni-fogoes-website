window.onload = () => {
	showCloseMenu()
	scrollShadow()

	/* ScrollReveal: show elements when scrolling */
	const scrollReveal = ScrollReveal({
		origin: 'top',
		distance: '30px',
		duration: 700,
		reset: true
	})

	scrollReveal.reveal(
		`
  .section__image, .button, .service-card
`,
		{
			interval: 100
		}
	)
}

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
	const header = document.querySelector('.header')
	const navHeight = header.offsetHeight

	window.addEventListener('scroll', () => {
		window.scrollY >= navHeight
			? header.classList.add('header--shadow')
			: header.classList.remove('header--shadow')
	})
}
