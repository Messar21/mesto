import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { editBtn, name, about, addBtn, popupList, popupProfile, formElementProfile, formProfileName,
    formProfileAbout, cardsContainer, popupAddCard, formElementCard, formCardName, formCardLink, popupImage, imageSrc,
    imageCaption, initialCards, options } from "./constants.js";

function enableValidations(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        const formValidator = new FormValidator(options, form);
        formValidator.enableValidation();
    });
}

function addCard (dataCard) {
    const card = new Card(dataCard, '#photo-template', openImage);
    cardsContainer.prepend(card.getCard());
}

function openImage (name, link) {
    openPopup(popupImage);
    imageSrc.src = link;
    imageSrc.alt = name;
    imageCaption.textContent = name;
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
    name.textContent = formProfileName.value;
    about.textContent = formProfileAbout.value;
    closePopup(popupProfile);
}

function addCardHandler (evt) {
    evt.preventDefault();
    const newCard = {
        name: formCardName.value,
        link: formCardLink.value,
    }
    addCard(newCard);
    evt.target.reset();
    closePopup(popupAddCard);
}

initialCards.forEach(addCard);

formElementProfile.addEventListener('submit', editProfile);
editBtn.addEventListener('click', () => {
    formProfileName.value = name.textContent;
    formProfileAbout.value = about.textContent;
    openPopup(popupProfile);
});

formElementCard.addEventListener('submit', addCardHandler);
addBtn.addEventListener('click', () => openPopup(popupAddCard));

popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
});

enableValidations(options);
