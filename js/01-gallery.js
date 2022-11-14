import { galleryItems } from './gallery-items.js';

// Створюємо посилання на елемент
const galleryList = document.querySelector(`.gallery`);


// Створюємо елемент за допомогою шаблонного рядка
const makeGalleryCard = ({ preview, original, description } = {}) => {

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

// Робимо делегування

// Підключаемо модалку за допомогою бібліотеки

// Додай закриття модального вікна після натискання клавіші Escape.Зроби так,
// щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотека basicLightbox містить метод для програмного закриття модального вікна.