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


function imageClick(event) {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();
    // Робимо перевірку делегування
    if (event.target.nodeName !== "IMG") {
    return;
  }
    // Підключаемо відкриття модального вікна за допомогою бібліотеки
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show();
    
    // Додаємо закриття модального вікна після натискання клавіші Escape
    galleryList.addEventListener(`keydown`, (event) => {
    if (event.code === `Escape`) {
        instance.close()
    }
});

}

