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

// galleryPrew.addEventListener("Escape", console.log('close'));
galleryPrew.addEventListener("click", basLb);

function basLb(event){
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	event.preventDefault();
	const index = Number(event.target.dataset.num);
	basicLightbox.create(`<img src = ${galleryItems[index].original}>`).show();
}
