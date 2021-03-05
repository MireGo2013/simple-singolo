console.log('Thanks to bySlavik :)')
//!MAJE TO SLIDER
const SliderContainer = document.querySelector('.slider_conteiner');
const SliderLine = document.querySelector('.slider_conteiner .slider_line');
const SliderAll = document.querySelectorAll('.slider_conteiner .slider_line .slider');

let indexSlide = 0;
let width;

function widthContentSlider() {
	width = SliderContainer.offsetWidth;
	SliderLine.style.width = width * SliderAll.length + 'px';
	SliderAll.forEach(element => {
		element.style.width = width + 'px';
		element.style.height = 'auto';
	})
	scrollSlider();
}
widthContentSlider();

window.addEventListener('resize', widthContentSlider);

const NextArrow = document.querySelector('.nextArrow');
const PrevArrow = document.querySelector('.prevArrow');
const OutsideWrapper = document.getElementById('slider_mobiles');

NextArrow.addEventListener('click', function () {
	OutsideWrapper.classList.toggle("intro__wrapper_2");
	indexSlide++;
	if (indexSlide >= SliderAll.length) {
		indexSlide = 0;
	}
	scrollSlider();
})

PrevArrow.addEventListener('click', function () {
	OutsideWrapper.classList.toggle("intro__wrapper_2");
	indexSlide--;
	if (indexSlide < 0) {
		indexSlide = SliderAll.length - 1;
	}
	scrollSlider();
})

function scrollSlider() {
	SliderLine.style.transform = 'translate(-' + width * indexSlide + 'px)';
}

//!MAKE TO RANDOM PICTURE 
let min = 1;
let max = 12;

const BtnPicture = document.querySelectorAll('.tag');
const picture = document.querySelectorAll('.picture');

//make random number 
function randomNumber() {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//MAKE TO RANDOM PICTURE on click button
BtnPicture.forEach(btn => {
	btn.addEventListener('click', function () {
		picture.forEach(img => {
			img.style.order = randomNumber(min, max);
		})
	})
})

//!MAKE TO SCROOLL
let linkAnchors = [...document.querySelectorAll('.burger__items')];
const sections = document.querySelectorAll('.scrollT');
const headerWrapper = document.querySelector('.header__all ');
// подсветить активную якорную ссылку
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	sections.forEach((section, index) => {
		if (section.offsetTop - headerWrapper.clientHeight <= scrollDistance) {
			linkAnchors.forEach((link) => {
				if (link.classList.contains('active')) {
					link.classList.remove('active');
				}
			})
			const activeLink = linkAnchors.find(link => {
				return link.hash.includes(section.id)
			})
			if (activeLink) {
				activeLink.classList.add('active');
			}
		}
	});
})

//TODO MAKE TO BURGER :(
const menuBtn = document.querySelector('.menu_btn');
const body = document.getElementsByTagName('body')[0];
const linkBurger = document.querySelectorAll('.link');

function toggleActiveClass() {
	body.classList.toggle('active-menu');
}
function removeActiveClassL() {
	body.classList.remove('active-menu');
}

menuBtn.addEventListener('click', toggleActiveClass);

linkBurger.forEach(link => {
	link.addEventListener('click', removeActiveClassL);
})



