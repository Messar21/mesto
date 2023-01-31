class Card {
    constructor(dataCard, templateSelector, handleImageClick) {
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }

    _createCard() {
        this._newCard = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
    }

    _addData() {
        const name = this._newCard.querySelector('.elements__name');
        name.textContent = this._name;
        this._photo = this._newCard.querySelector('.elements__photo');
        this._photo.src = this._link;
        this._photo.alt = this._name;
    }

    _setEventListeners() {
        this._btnLike = this._newCard.querySelector('.elements__like');
        this._btnLike.addEventListener('click', () => this._likeCard());

        const btnDelete = this._newCard.querySelector('.elements__delete');
        btnDelete.addEventListener('click', () => this._deleteCard());

        this._photo.addEventListener('click', () => this._handleImageClick(this._name, this._link));
    }

    _likeCard() {
        this._btnLike.classList.toggle('elements__like_active');
    }

    _deleteCard() {
        this._btnLike.remove();
        this._btnLike = null;
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