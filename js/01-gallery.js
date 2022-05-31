import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPrew = document.querySelector('.gallery');
// console.log('gallery;', galleryPrew);
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
	
const item = document.createElement('img');
item.classList.add('gallery__image'); 
item.src = preview[i];
item.alt = description[i];

items.push(item);
// console.log(item); 

};
galleryPrew.append(...items);


galleryPrew.addEventListener("click", (event) => {
	console.log('event.target1', event.target.nodeName.scr);//.nodeName
	if (event.target.nodeName !== 'IMG') {
		console.log('event.target2', event.target);
		console.log('event.i', document.querySelector(original));
    return;
  }
	// const index = event.target.
  // console.log("original:",original);
});