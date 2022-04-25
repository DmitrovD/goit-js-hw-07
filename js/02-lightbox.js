import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery');
const gallaryImgMarkup = galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join(``);

gallaryContainer.insertAdjacentHTML('beforeend', gallaryImgMarkup);

new SimpleLightbox(`.gallery__item a`, {
    captionsData: 'alt',
    captionDelay: 250,
});