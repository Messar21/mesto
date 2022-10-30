let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let name = document.querySelector('.profile__name');
let about = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form-container')
let formName = formElement.querySelector('.popup__item_type_name');
let formAbout = formElement.querySelector('.popup__item_type_about');
let like = document.querySelectorAll('.elements__like');

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
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', liked);
}