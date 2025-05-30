let data = [
	{img: './assets/images/Home/course1.jpg', text: 'Веб-разработка', price: 'от 15 000 ₽'},
	{img: './assets/images/Home/course2.jpg', text: 'Мобильная разработка', price: 'от 18 000 ₽'},
	{img: './assets/images/Home/course3.jpg', text: 'UI/UX дизайн', price: 'от 12 000 ₽'}
]
let elements = document.querySelector('.slider')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let index = 1
let slideWidth = window.innerWidth <= 480 ? 280 : (window.innerWidth < 1024 ? 720 : 960)

function renderSlides(){
	let firstClone = data[0]
	let lastClone = data[data.length - 1]
	let slideHtml = [lastClone, ...data, firstClone].map(slide => 
		`<div class = 'slide'>
		<img src = '${slide.img}'>
		<p>${slide.text}</p>
		<p>${slide.price}</p>
		</div>`).join(' ')
	elements.innerHTML = slideHtml
	elements.style.transform = `translateX(-${index*slideWidth}px)`
}

function updatesSlider(){
	elements.style.transition = 'transform 1s ease'
	elements.style.transform = `translateX(-${index*slideWidth}px)`
}

function nextSlide(){
	if(index >= data.length)
	{
		index++
		updatesSlider()
		setTimeout(() => {
			elements.style.transition = 'none'
			index = 1
			elements.style.transform = `translateX(-${index*slideWidth}px)`
		}, 2500)
	} else {
		index++
		updatesSlider()
	}
}

function prevSlide() {
	if (index <= 0)
	{
		index--
		updatesSlider()
		setTimeout(() => {
			elements.style.transition = 'none'
			index = data.length
			elements.style.transform = `translateX(-${index*data.length}px)`
		}, 2500)
	} else {
		index--
		updatesSlider()
	}
}

function updateSlideWidth() {
	slideWidth = window.innerWidth <= 480 ? 280 : (window.innerWidth < 1024 ? 720 : 960)
	elements.style.transform = `translateX(-${index*slideWidth}px)`
}

window.addEventListener('resize', updateSlideWidth)

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

renderSlides()