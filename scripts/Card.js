class Card {
    constructor(cardElement, templateSelector, openImage) {
        this._name = cardElement.name;
        this._link = cardElement.link;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
    }

    _createCard() {
        this._newCard = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);;
    }

    _addData() {
        const name = this._newCard.querySelector('.elements__name');
        name.textContent = this._name;
        this._photo = this._newCard.querySelector('.elements__photo');
        this._photo.src = this._link;
        this._photo.alt = this._name;
    }

    _setEventListeners() {
        this._likeBtn = this._newCard.querySelector('.elements__like');
        this._likeBtn.addEventListener('click', () => this._likeCard());

        const deleteBtn = this._newCard.querySelector('.elements__delete');
        deleteBtn.addEventListener('click', () => this._deleteCard());

        this._photo.addEventListener('click', () => this._openImage());
    }

    _likeCard() {
        this._likeBtn.classList.toggle('elements__like_active');
    }

    _deleteCard() {
        this._likeBtn.remove();
        this._likeBtn = null;
        this._photo.remove();
        this._photo = null;
        this._newCard.remove();
        this._newCard = null;
    }

    getCard() {
        this._createCard();
        this._addData();
        this._setEventListeners();

        return this._newCard
    }
}

export default Card;