import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery');
const gallaryImgMarkup = galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join(``);

gallaryContainer.insertAdjacentHTML('beforeend', gallaryImgMarkup);

gallaryContainer.addEventListener('click', (e) => {
    e.preventDefault();
    
    const modal = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${event.target.alt}">`);
    modal.show();

    if(modal.visible()) {
        window.addEventListener(`keydown`, (event) => {
            console.log(event);
            if(event.code === `Escape`) {
                modal.close();
            };
        });
    };
});