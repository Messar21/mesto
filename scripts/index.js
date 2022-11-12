let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup_type_edit');
let popupClose = document.querySelector('.popup__close_type_edit');

let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');

let formElement = document.querySelector('.popup__form-container_type_edit');
let formName = formElement.querySelector('.popup__item_type_name');
let formAbout = formElement.querySelector('.popup__item_type_about');

let cardsContainer = document.querySelector('.elements__list');
let addBtn = document.querySelector('.profile__add-button');
let popupCards = document.querySelector('.popup_type_add');
let addPopupClose = document.querySelector('.popup__close_type_add');

let formElementCard = document.querySelector('.popup__form-container_type_add');
let formCardName = formElementCard.querySelector('.popup__item_type_name-card');
let formCardLink = formElementCard.querySelector('.popup__item_type_link');

let popupImage = document.querySelector('.image-popup');
let popupSrc = popupImage.querySelector('.image-popup__image');
let imageCaption = popupImage.querySelector('.image-popup__caption');
let imageClose = popupImage.querySelector('.image-popup__close');

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

    const deleteBtn = newCard.querySelector('.elements__delete');
    deleteBtn.addEventListener('click', deleteCard);

    const image = newCard.querySelector('.elements__photo');
    image.addEventListener('click', openImage);

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

function closePopup(evt) {
    evt.target.closest('.popup_opened').classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closePopup(evt);
}

function liked(evt) {
    evt.target.classList.toggle('elements__like_active');
}

function openAddCard() {
    popupCards.classList.add('popup_opened');
}

function addCardHandler (evt) {
    evt.preventDefault();
    const initCard = {
        name: formCardName.value,
        link: formCardLink.value,
    }
    addCard(initCard);
    formCardName.value = '';
    formCardLink.value = '';
}

function deleteCard(evt) {
    let card = evt.target.closest('.elements__item');
    card.remove();
}

function openImage(evt) {
    popupImage.classList.add('popup_opened');
    popupSrc.src = evt.target.src;
    let name = evt.target.nextSibling.nextSibling.querySelector('.elements__name');
    imageCaption.textContent = name.textContent;
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

formElementCard.addEventListener('submit', addCardHandler);
addBtn.addEventListener('click', openAddCard);
addPopupClose.addEventListener('click', closePopup);
imageClose.addEventListener('click', closePopup);