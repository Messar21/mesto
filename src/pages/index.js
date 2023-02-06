import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { btnEditProfile, btnAddCard, initialCards, options, btnEditAvatar } from "../utils/constants.js";
import './index.css';
import UserInfo from "../components/UserInfo";

function enableValidations(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        const formValidator = new FormValidator(options, form);
        formValidator.enableValidation();
    });
}

function createCardElement (dataCard) {
    const cardElement = new Card(dataCard, '#photo-template', popupWithImage.open.bind(popupWithImage));
    return cardElement.getCard()
}

const userInfo = new UserInfo({ selectorName: '.profile__name',
    selectorAbout: '.profile__about', selectorAvatar: '.profile__avatar' });

const cardsSection = new Section({ items: initialCards, renderer: (dataCard) => {
        const card = createCardElement(dataCard)
        cardsSection.addItem(card);
    } }, '.elements__list');

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditProfile = new PopupWithForm('.popup_type_edit', ({ name, about }, evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(name, about);
    popupEditProfile.close();
});

const popupCardAdd = new PopupWithForm('.popup_type_add', ({ nameCard, link }, evt) => {
    evt.preventDefault();
    const dataCard = {
        name: nameCard,
        link: link,
    }
    const card = createCardElement(dataCard);
    cardsSection.addItem(card);
    popupCardAdd.close();
});

const popupEditAvatar = new PopupWithForm('.popup_type_avatar', ({ avatarLink }, evt) => {
    evt.preventDefault();
    userInfo.setUserAvatar(avatarLink);
    popupEditAvatar.close();
});

popupEditProfile.setEventListeners();
popupCardAdd.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();

cardsSection.renderItems();

btnEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
    popupEditProfile.setInputValues(userInfo.getUserInfo());
});

btnAddCard.addEventListener('click', () => popupCardAdd.open());

btnEditAvatar.addEventListener('click', () => popupEditAvatar.open());

enableValidations(options);
