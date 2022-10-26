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
    formName.setAttribute('value', name.textContent);
    formAbout.setAttribute('value', about.textContent);
}

function closePopup() {
    popupOpen.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault(); //
    let nameText = formName.value;
    let aboutText = formAbout.value;
    name.textContent = nameText;
    about.textContent = aboutText;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);