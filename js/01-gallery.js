import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPrew = document.querySelector('.gallery');

// const modal = document.querySelector('.backdrop');
const items = [];
const preview = [];
const original = [];
const description = [];
// let outImage;

for (const item of galleryItems) {
  preview.push(item.preview);
	original.push(item.original);
	description.push(item.description);
}

for(let i = 0; i < 9; i++){

const itemDiv = document.createElement('div');
itemDiv.classList.add('gallery__item');

const itemA = document.createElement('a');
itemA.classList.add('gallery__link');
itemA.href = original[i];	

const itemImg = document.createElement('img');
itemImg.classList.add('gallery__image'); 
itemImg.src = preview[i];
itemImg.alt = description[i];
itemImg.dataset.num = `${i}`

itemA.appendChild(itemImg);
itemDiv.appendChild(itemA);
items.push(itemDiv);
};

galleryPrew.append(...items);

// galleryPrew.addEventListener('click', 'gallery__link');
// e.preventDefault();
const links = document.querySelectorAll('.gallery__link');
console.log(links);


links.forEach(function callback(link) {
  link.addEventListener("click", function(event) {
		console.log("Мы отменили стандартное действие браузера");
		event.preventDefault();
	}, false);
});


galleryPrew.addEventListener("click", (event) => {
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	// console.log(event.target);
	const index = Number(event.target.dataset.num);
	// console.log(index); basicLightbox--visible
	basicLightbox.create(`<img src = ${original[index]}>`).show();
	
	
});
console.log('event.target');

const modal = document.querySelector('.basicLightbox--visible');
console.log(modal);
// modal.addEventListener('Escape', esc);
// 	function esc(){console.log('close();');
		
// 	}