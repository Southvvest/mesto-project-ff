// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


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