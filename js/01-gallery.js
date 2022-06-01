import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPrew = document.querySelector('.gallery');

const modal = document.querySelector('.backdrop');
const items = [];
const preview = [];
const original = [];
const description = [];
let outImage;
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
// itemImg.dataset(source) = original[i];
itemImg.alt = description[i];
itemImg.dataset.num = `${i}`
itemA.appendChild(itemImg);
itemDiv.appendChild(itemA);
items.push(itemDiv);
};
galleryPrew.append(...items);

galleryPrew.addEventListener("click", (event) => {
	if (event.target.nodeName !== 'IMG') {
		instance.close();
		return;
  }
	const imageInstance = basicLightbox.create(document.querySelector('.gallery__image'))
	// refs.modal.classList.toggle("is-hidden");

});
windows.addEventListener("click", (event) => {

	instance.close(document.querySelector('.gallery__link'));
})
