let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form-container')
let formName = formElement.querySelector('.popup__item-name');
let formAbout = formElement.querySelector('.popup__item-about');
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

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);