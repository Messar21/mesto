import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { editBtn, name, about, addBtn, initialCards, options } from "../utils/constants.js";
import './index.css';

function enableValidations(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        const formValidator = new FormValidator(options, form);
        formValidator.enableValidation();
    });
}

const CardsSection = new Section({ items: initialCards, renderer: (dataCard) => {
        const card = new Card(dataCard, '#photo-template', popupWithImage.open.bind(popupWithImage));
        const cardElement = card.getCard();
        CardsSection.addItem(cardElement);
    } }, '.elements__list');

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditProfile = new PopupWithForm('.popup_type_edit', (evt) => {
    evt.preventDefault();
    popupEditProfile._getInputValues('.popup__input_type_name', '.popup__input_type_about');
    name.textContent = popupEditProfile.inputValueName;
    about.textContent = popupEditProfile.inputValueAbout;
    popupEditProfile.close();
});

const popupCardAdd = new PopupWithForm('.popup_type_add', (evt) => {
    evt.preventDefault();
    popupCardAdd._getInputValues('.popup__input_type_name-card', '.popup__input_type_link');
    const newCard = {
        name: popupCardAdd.inputValueName,
        link: popupCardAdd.inputValueAbout,
    }
    console.log(newCard.name);
    const handleAddCard = new Card(newCard, '#photo-template', popupWithImage.open.bind(popupWithImage));
    const card = handleAddCard.getCard();
    CardsSection.addItem(card);
    popupCardAdd.close();
});

CardsSection.renderItems();

editBtn.addEventListener('click', () => popupEditProfile.open());

addBtn.addEventListener('click', () => popupCardAdd.open());

enableValidations(options);
