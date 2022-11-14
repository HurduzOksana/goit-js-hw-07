import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створюємо посилання на елемент
const galleryList = document.querySelector(`.gallery`);


// Створюємо елемент за допомогою шаблонного рядка
const makeGalleryCard = ({ preview, original, description } = {}) => {

  return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `
};

// Створюємо масив елементів
const galleryCardContainer = galleryItems.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

// Додаємо розмітку в html
galleryList.insertAdjacentHTML(`afterbegin`, galleryCardContainer.join(``));

// Назначаємо слухача на клік
galleryList.addEventListener(`click`, imageClick);

// Запобігаємо перезавантаженню сторінки
function imageClick(event) {
    event.preventDefault();
}
