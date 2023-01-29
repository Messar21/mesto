const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-button');
const name = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const addBtn = profile.querySelector('.profile__add-button');

const popupList = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const formElementProfile = document.querySelector('.popup__form_type_edit');
const formProfileName = formElementProfile.querySelector('.popup__input_type_name');
const formProfileAbout = formElementProfile.querySelector('.popup__input_type_about');

const cardsContainer = document.querySelector('.elements__list');

const popupAddCard = document.querySelector('.popup_type_add');

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

const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
};

export { editBtn, name, about, addBtn, popupList, popupProfile, formElementProfile, formProfileName,
    formProfileAbout, cardsContainer, popupAddCard, formElementCard, formCardName, formCardLink, popupImage, imageSrc,
imageCaption, initialCards, options };