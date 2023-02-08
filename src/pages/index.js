import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import { btnEditProfile, btnAddCard, options, btnEditAvatar } from "../utils/constants.js";
import './index.css';
import UserInfo from "../components/UserInfo";
import PopupAccept from "../components/PopupAccept";
import Api from "../components/Api";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58/',
    headers: {
        authorization: '5ad038d3-aff7-428b-9266-e12345a82aaa',
        'Content-Type': 'application/json'
    }
});
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, dataCards]) => {
        userInfo.setUserInfo(userData);
        cardsSection.renderItems(dataCards, userData);
    })
    .catch((err) => {
        console.log(err);
    });

function enableValidations(options) {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        const formValidator = new FormValidator(options, form);
        formValidator.enableValidation();
    });
}

function createCardElement (dataCard, userData) {
        const cardElement = new Card(dataCard, '#photo-template', popupWithImage.open.bind(popupWithImage),
            popupDeleteCard.open.bind(popupDeleteCard), userData,
            () => {
                api.putLikeToCard(cardElement.cardId)
                    .then((data) => {
                        cardElement.refreshCountLikes(data.likes.length);
                        cardElement.likeCard();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                },
            () => {
                api.deleteLikeToCard(cardElement.cardId)
                    .then((data) => {
                        cardElement.refreshCountLikes(data.likes.length);
                        cardElement.unlikeCard();
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        return cardElement.getCard()
}

const popupDeleteCard = new PopupAccept('.popup_type_deleteCard', (evt) => {
    evt.preventDefault();
    api.deleteCard(popupDeleteCard.cardId)
        .then((data) => {
            console.log(data);
            popupDeleteCard.accept()
        })
        .catch((err) => {
        console.log(err);
    });
    popupDeleteCard.close();
})

const userInfo = new UserInfo({ selectorName: '.profile__name',
    selectorAbout: '.profile__about', selectorAvatar: '.profile__avatar' });

const cardsSection = new Section({ renderer: (dataCard, userData) => {
        const card = createCardElement(dataCard, userData);
        cardsSection.addItem(card);
    } }, '.elements__list');

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupEditProfile = new PopupWithForm('.popup_type_edit', ({ name, about }, evt) => {
    evt.preventDefault();
    popupEditProfile.startSaving();
    api.sendUserInfo(name, about)
        .then((data) => {
        userInfo.setUserInfo(data);
        popupEditProfile.close();
    })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditProfile.stopSaving();
        });
});

const popupCardAdd = new PopupWithForm('.popup_type_add', ({ nameCard, link }, evt) => {
    evt.preventDefault();
    const dataCard = {
        name: nameCard,
        link: link,
    };
    popupCardAdd.startSaving();
    Promise.all([api.getUserInfo(), api.postNewCard(dataCard)])
        .then(([userData, dataCards]) => {
            const card = createCardElement(dataCards, userData);
            cardsSection.addItem(card);
            popupCardAdd.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupCardAdd.stopSaving();
        });
});

const popupEditAvatar = new PopupWithForm('.popup_type_avatar', ({ avatarLink }, evt) => {
    evt.preventDefault();
    popupEditAvatar.startSaving();
    api.setNewAvatar(avatarLink)
        .then((userData) => {
        userInfo.setUserAvatar(userData.avatar);
        popupEditAvatar.close();
    })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditAvatar.stopSaving();
        });
});

popupEditProfile.setEventListeners();
popupCardAdd.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

btnEditProfile.addEventListener('click', () => {
    popupEditProfile.open();
    popupEditProfile.setInputValues(userInfo.getUserInfo());
});

btnAddCard.addEventListener('click', () => popupCardAdd.open());

btnEditAvatar.addEventListener('click', () => popupEditAvatar.open());

enableValidations(options);

