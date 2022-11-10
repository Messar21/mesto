let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form-container')
let formName = formElement.querySelector('.popup__item_type_name');
let formAbout = formElement.querySelector('.popup__item_type_about');
let like = document.querySelectorAll('.elements__like');
let cardsContainer = document.querySelector('.elements__list');

const templateCard = document.querySelector('#photo-template').content.querySelector('.elements__item');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function createCard (initCard) {
    const newCard = templateCard.cloneNode(true);

    const title = newCard.querySelector('.elements__name');
    title.textContent = initCard.name;

    const photo = newCard.querySelector('.elements__photo');
    photo.src = initCard.link;

    const likeBtn = newCard.querySelector('.elements__like');
    likeBtn.addEventListener('click', liked);

    return newCard
}

function addCard (initCard) {
    cardsContainer.prepend(createCard(initCard));
}

initialCards.forEach((initCard) => {
    addCard(initCard);
});

function openPopup() {
    popupOpen.classList.add('popup_opened');
    formName.value = name.textContent;
    formAbout.value = about.textContent;
}

function closePopup() {
    popupOpen.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault(); //
    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closePopup();
}

function liked(e) {
    e.target.classList.toggle('elements__like_active');
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);