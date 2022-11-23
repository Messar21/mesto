const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-button');
const name = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const addBtn = profile.querySelector('.profile__add-button');

const popupList = document.querySelectorAll('.popup');

const popupProfile = document.querySelector('.popup_type_edit');

const closeBtns = document.querySelectorAll('.popup__close');

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
    photo.alt = initCard.name;

    const likeBtn = newCard.querySelector('.elements__like');
    likeBtn.addEventListener('click', likeCard);

    const deleteBtn = newCard.querySelector('.elements__delete');
    deleteBtn.addEventListener('click', deleteCard);

    const image = newCard.querySelector('.elements__photo');
    image.addEventListener('click', openImage);

    return newCard
}

function addCard (initCard) {
    cardsContainer.prepend(createCard(initCard));
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
    if (popup.classList.contains('popup')) {
        popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', closeOnEsc);
    }
}

function editProfile (evt) {
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    name.textContent = formName.value;
    about.textContent = formAbout.value;
    closePopup(popup);
}

function likeCard(evt) {
    evt.target.classList.toggle('elements__like_active');
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

function deleteCard(evt) {
    const card = evt.target.closest('.elements__item');
    card.remove();
}

function openImage(evt) {
    openPopup(popupImage);
    imageSrc.src = evt.target.src;
    imageSrc.alt = evt.target.alt;
    const name = evt.target.closest('.elements__item').querySelector('.elements__name');
    imageCaption.textContent = name.textContent;
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

closeBtns.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

formElementCard.addEventListener('submit', addCardHandler);
addBtn.addEventListener('click', () => openPopup(popupAddCards));

popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => closePopup(evt.target));
})
