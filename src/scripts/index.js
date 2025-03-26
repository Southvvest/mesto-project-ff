// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import '../pages/index.css';

const arkhyzImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const chelyabinskImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const kholmogorskyImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

const initialCards = [
    {
      name: "Архыз",
      link: arkhyzImage,
    },
    {
      name: "Челябинская область",
      link: chelyabinskImage,
    },
    {
      name: "Иваново",
      link: ivanovoImage,
    },
    {
      name: "Камчатка",
      link: kamchatkaImage,
    },
    {
      name: "Холмогорский район",
      link: kholmogorskyImage,
    },
    {
      name: "Байкал",
      link: baikalImage,
    }
];

const cardContainer = document.querySelector('.places__list');

function createCard({name, link}, removeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');

    cardTitle.textContent = name;    
    cardImage.src = link;
    cardImage.alt = 'Фотография на тему: ' + name;

    removeButton.addEventListener('click', () => removeCard(cardElement));

    return cardElement;
};

function removeCard(cardElement){
    cardElement.remove();
};

initialCards.forEach(item => {
    const card = createCard(item, removeCard);
    cardContainer.append(card);
});