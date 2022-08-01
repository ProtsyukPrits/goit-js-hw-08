// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItem = document.querySelector('.gallery');

galleryItem.insertAdjacentHTML('afterbegin', createGalleryCards());

function createGalleryCards() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      `;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  nav: true,
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'down',
  captionDelay: 250,
  captionClass: 'caption',
  close: true,
  animationSlide: 0,
  docClose: true,
});
// Change code below this line

console.log(galleryItems);
