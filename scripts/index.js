// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


const cardContainer = document.querySelector('.places__list');

function addCard({name, link}, removeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = 'Фотография на тему: ' + name;

    removeButton.addEventListener('click', () => removeCard(cardElement));

    return cardElement;
};

function removeCard(cardElement){
    cardElement.remove();
};

initialCards.map(item => addCard(item, removeCard)).forEach((item) => cardContainer.append(item));