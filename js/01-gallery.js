import { galleryItems } from './gallery-items.js';
// Change code below this line
// const bodyPrew = document.querySelector('body');createElForGallery
const galleryRef = document.querySelector('.gallery');


function win(event){
	console.log(event);}


function createElForGallery(){
	const makeup = galleryItems.map(({preview,original,description})=>{
		return `
			<div class="gallery__item">
				<a class="gallery__link" href=${original}>
					<img
						class="gallery__image"
						src=${preview}
						data-source=${original}
						alt=${description}
					/>
				</a>
			</div>
		`
	}).join('');

galleryRef.innerHTML = makeup;
}
console.log("createElForGallery:");
createElForGallery();//galleryItems

galleryRef.addEventListener("click", basLb);
let modal;
function basLb(event){
	if (event.target.nodeName !== 'IMG') {
		return;
  }
	event.preventDefault();

	const largeImg = event.target.dataset.source;

	modal = basicLightbox.create(`<img src = ${largeImg}>`,
	{
    onShow: () => window.addEventListener('keydown', closeModalEsc),
		onClose: () => window.removeEventListener('keydown', closeModalEsc),
});
modal.show(() => console.log('lightbox now visible'));//
}
function closeModalEsc(event){
	if(event.code === "Escape"){
		modal.close(() => console.log('lightbox not visible anymore'));
	}
}
