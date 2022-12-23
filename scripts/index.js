import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-button');
const name = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const addBtn = profile.querySelector('.profile__add-button');

const popupList = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const formElement = document.querySelector('.popup__form_type_edit');
const formName = formElement.querySelector('.popup__input_type_name');
const formAbout = formElement.querySelector('.popup__input_type_about');

const cardsContainer = document.querySelector('.elements__list');

const popupAddCards = document.querySelector('.popup_type_add');

const formElementCard = document.querySelector('.popup__form_type_add');
const formCardName = formElementCard.querySelector('.popup__input_type_name-card');
const formCardLink = formElementCard.querySelector('.popup__input_type_link');

const popupImage = document.querySelector('.popup_type_image');
const imageSrc = popupImage.querySelector('.popup__image');
const imageCaption = popupImage.querySelector('.popup__caption');

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

function enableValidations(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        const formValidator = new FormValidator(options, form);
        formValidator.enableValidation();
    });
};

function addCard (initCard) {
    const card = new Card(initCard, '#photo-template', openImage);
    cardsContainer.prepend(card.getCard());
}

function openImage () {
    openPopup(popupImage);
    imageSrc.src = this._link;
    imageSrc.alt = this._name;
    imageCaption.textContent = this._name;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
}

function closeOnEsc (evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeOnEsc);
}

function editProfile (evt) {
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closePopup(popup);
}

function addCardHandler (evt) {
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    const initCard = {
        name: formCardName.value,
        link: formCardLink.value,
    }
    addCard(initCard);
    evt.target.reset();
    const button = popup.querySelector('.popup__save');
    button.classList.add('popup__save_disabled');
    button.setAttribute('disabled', true);
    closePopup(popup);
}

initialCards.forEach((initCard) => {
    addCard(initCard);
});

formElement.addEventListener('submit', editProfile);
editBtn.addEventListener('click', () => {
    formName.value = name.textContent;
    formAbout.value = about.textContent;
    openPopup(popupProfile);
});

formElementCard.addEventListener('submit', addCardHandler);
addBtn.addEventListener('click', () => openPopup(popupAddCards));

popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
})

enableValidations({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
});
