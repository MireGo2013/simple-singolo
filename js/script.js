const btnUrl = document.querySelectorAll('.burger__items');
const urlServices = document.querySelector('.our__services');
const urlPortfolio = document.querySelector('.portfolio');
const urlContat = document.querySelector('.footer');
const urlHeader = document.querySelector('.header__all');


//Делаем scroll на элементы навигации по событию 'click'

for (let i = 0; i < btnUrl.length; i++) {
	btnUrl[i].addEventListener('click', () => {
		if (i === 0) {
			scrollTo(urlHeader);
		} else if (i === 1) {
			scrollTo(urlServices);
		} else if (i === 2) {
			scrollTo(urlPortfolio);
		} else {
			scrollTo(urlContat);
		}
	});
}


function scrollTo(element) {

	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth',
	})
}
// Создаем переменные для стрелок
const arrLeft = document.querySelector('.arrow_left');
const arrRight = document.querySelector('.arrow_right');
// Далем измение стилей по событию клик на левую стрелку
arrLeft.addEventListener('click', () => {
	let slider1 = document.querySelector('.mobile_place_one ');
	let slider2 = document.querySelector('.mobile_place_two ');
	let colorBgAll = document.querySelector('.wrapper_slider');
	let colorBgSlider = document.querySelector('.conteiner_slider');

	if (slider1.style.display === 'flex') {
		slider2.style.display = 'flex';
		colorBgAll.style.backgroundColor = '#648BF0';
		colorBgAll.style.borderBottom = '#648BF0';
		colorBgSlider.style.backgroundColor = '#648BF0';
		slider1.style.display = 'none';
	} else {
		slider1.style.display = 'flex';
		colorBgAll.style.backgroundColor = '#F06C64';
		colorBgAll.style.borderBottom = '#EA676B';
		colorBgSlider.style.backgroundColor = '#F06C64';
		slider2.style.display = 'none';
	}

})
// Далем измение стилей по событию клик на правую стрелку
arrRight.addEventListener('click', () => {
	let slider1 = document.querySelector('.mobile_place_one ');
	let slider2 = document.querySelector('.mobile_place_two ');
	let colorBgAll = document.querySelector('.wrapper_slider');
	let colorBgSlider = document.querySelector('.conteiner_slider');

	if (slider1.style.display === 'flex') {
		slider2.style.display = 'flex';
		colorBgAll.style.backgroundColor = '#648BF0';
		colorBgAll.style.borderBottom = '#648BF0';
		colorBgSlider.style.backgroundColor = '#648BF0';
		slider1.style.display = 'none';
	} else {
		slider1.style.display = 'flex';
		colorBgAll.style.backgroundColor = '#F06C64';
		colorBgAll.style.borderBottom = '#EA676B';
		colorBgSlider.style.backgroundColor = '#F06C64';
		slider2.style.display = 'none';
	}

});

let shaffleBtn = document.querySelectorAll('.tag'),
	img = document.querySelectorAll('.picture');
let min = 0;
let max = 12;

let randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

shaffleBtn.forEach((randomButton) => {
	randomButton.addEventListener('click', () => {
		img.forEach(img => img.style.order = randomNumber(min, max));

	})

});