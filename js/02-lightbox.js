import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPrew = document.querySelector('.gallery');

const items = [];

for(let i = 0; i < 9; i++){
	const itemLi = document.createElement('li');
		itemLi.classList.add('gallery__item');

	const itemA = document.createElement('a');
		itemA.classList.add('gallery__link');
		itemA.href = galleryItems[i].original;	

	const itemImg = document.createElement('img');
		itemImg.classList.add('gallery__image'); 
		itemImg.src = galleryItems[i].preview;
		itemImg.alt = galleryItems[i].description;

	itemA.appendChild(itemImg);
	itemLi.appendChild(itemA);
	items.push(itemLi);
};
galleryPrew.append(...items);

galleryPrew.addEventListener("click", simLb);

function simLb(event){
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	event.preventDefault();
	new SimpleLightbox('.gallery a', {
		captionsData: 'alt',
	});
};
