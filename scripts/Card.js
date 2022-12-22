class Card {
    constructor(cardElement, templateElement, openImage) {
        this._name = cardElement.name;
        this._link = cardElement.link;
        this._template = templateElement;
        this._openImage = openImage;
    }

    _renderCard() {
        this._newCard = this._template.cloneNode(true);
    }

    _addData() {
        const name = this._newCard.querySelector('.elements__name');
        name.textContent = this._name;
        const photo = this._newCard.querySelector('.elements__photo');
        photo.src = this._link;
        photo.alt = this._name;
    }

    _setEventListeners() {
        this._likeBtn = this._newCard.querySelector('.elements__like');
        this._likeBtn.addEventListener('click', () => this._likeCard());

        const deleteBtn = this._newCard.querySelector('.elements__delete');
        deleteBtn.addEventListener('click', () => this._deleteCard());

        const image = this._newCard.querySelector('.elements__photo');
        image.addEventListener('click', () => this._openImage());
    }

    _likeCard() {
        this._likeBtn.classList.toggle('elements__like_active');
    }

    _deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    getView() {
        this._renderCard();
        this._addData();
        this._setEventListeners();

        return this._newCard
    }
}

export default Card;