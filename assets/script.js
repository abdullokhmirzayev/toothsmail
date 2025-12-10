/* --------------------------------------
	   MOBILE NAVBAR MENU TOGGLER
	--------------------------------------- */
const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')

menuBtn.addEventListener('click', () => {
	navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'
})

/* --------------------------------------
	   HERO SLIDER
	--------------------------------------- */
let currentSlide = 0
const slides = document.querySelectorAll('.carousel-item')
const totalSlides = slides.length

const showSlide = index => {
	slides.forEach(slide => slide.classList.remove('active'))
	slides[index].classList.add('active')
}

function prevFunction() {
	currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
	showSlide(currentSlide)
}

document.querySelector('.left-btn').addEventListener('click', prevFunction)

setInterval(prevFunction, 3000)

document.querySelector('.right-btn').addEventListener('click', () => {
	currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
	showSlide(currentSlide)
})

showSlide(currentSlide) // First slide show

/* --------------------------------------
	   SERVICES TABS (TAB PICKER)
	--------------------------------------- */
const pickerButtons = document.querySelectorAll('.services-picker button')
const tabs = document.querySelectorAll('.service-tab')

pickerButtons.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		// eski active-ni o‘chir
		document
			.querySelector('.activeServicePicker')
			?.classList.remove('activeServicePicker')

		document
			.querySelector('.activeServiceTab')
			?.classList.remove('activeServiceTab')

		// yangi active qo‘sh
		btn.classList.add('activeServicePicker')
		tabs[index].classList.add('activeServiceTab')
	})
})

/* --------------------------------------
	   TESTIMONIAL SLIDER
	--------------------------------------- */

const testItems = document.querySelectorAll('.testimonial-item')
const leftBtn = document.querySelector('.test-btn.left')
const rightBtn = document.querySelector('.test-btn.right')

let index = 0 // boshlang‘ich pozitsiya

const showTestimonials = () => {
	testItems.forEach(item => (item.style.display = 'none'))

	// Har safar 3 ta item ko‘rinadi
	for (let i = 0; i < 3; i++) {
		let current = (index + i) % testItems.length
		testItems[current].style.display = 'block'
	}
}

// Chap tugma
leftBtn.addEventListener('click', () => {
	index = (index - 1 + testItems.length) % testItems.length
	showTestimonials()
})

// O‘ng tugma
rightBtn.addEventListener('click', () => {
	index = (index + 1) % testItems.length
	showTestimonials()
})

// Boshlang‘ich holat
showTestimonials()
