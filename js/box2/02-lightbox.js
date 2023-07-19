import { galleryItems } from '../gallery-items.js';
//
const galleryRef = document.querySelector('.gallery');
//
galleryRef.addEventListener("click", simLb);
//
console.log("box2: ");
//
function createElForGallery(){
  const makeup = galleryItems.map(({preview,original,description})=>{
		return `
			<a class="gallery__item" href=${original}>
				<img class="gallery__image" src=${preview} alt=${description}/>
			</a>`
	}).join('');

galleryRef.innerHTML = makeup;
}

createElForGallery();//galleryItems

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});

function simLb(event){
	// console.log(event.target);
	// console.log(event.currentTarget);
	event.preventDefault();
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	lightbox;
};



