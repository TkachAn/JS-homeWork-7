import { galleryItems } from './gallery-items.js';
// Change code below this line
const bodyPrew = document.querySelector('body');
const galleryPrew = document.querySelector('.gallery');
console.log(bodyPrew);
const items = [];

for(let i = 0; i < 9; i++){
	const itemDiv = document.createElement('div');
		itemDiv.classList.add('gallery__item');

	const itemA = document.createElement('a');
		itemA.classList.add('gallery__link');
		itemA.href = galleryItems[i].original;	

	const itemImg = document.createElement('img');
		itemImg.classList.add('gallery__image'); 
		itemImg.src = galleryItems[i].preview;
		itemImg.alt = galleryItems[i].description;
		itemImg.dataset.num = `${i}`

	itemA.appendChild(itemImg);
	itemDiv.appendChild(itemA);
	items.push(itemDiv);
};

galleryPrew.append(...items);

let openSlaid = document.querySelector('.basicLightbox');
galleryPrew.addEventListener("click", basLb);

function basLb(event){
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	event.preventDefault();
	const index = Number(event.target.dataset.num);
	const indxF = indexOf(event.target);
	console.log("indxF.",indxF);
	basicLightbox.create(`<img src = ${galleryItems[index].original}>`).show();
	openSlaid = document.querySelector('.basicLightbox--visible');
	console.log("window...",openSlaid);
	galleryPrew.classList.toggle('open');
	console.log("galleryPrew...",galleryPrew.classList);
}

	
	// const openSlaid = document.querySelector('.gallery');
	// console.log("window...",openSlaid);
	document.addEventListener("keydown", (e) => {
		if (e.code == "Escape" && openSlaid) {
			openSlaid.close(() => console.log('lightbox not visible anymore'))
			console.log("Closing window...");
		}
	});