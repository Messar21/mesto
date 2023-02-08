class Card {
    constructor(dataCard, templateSelector, handleImageClick, handleDeleteClick,
                userData, handlePutLike, handleDeleteLike) {
        this._name = dataCard.name;
        this._link = dataCard.link;
        this.cardId = dataCard._id;
        this._ownerId = dataCard.owner._id;
        this._userId = userData._id;
        this._arrayOfLikes = dataCard.likes;
        this._numberOfLikes = this._arrayOfLikes.length;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handlePutLike = handlePutLike;
        this._handleDeleteLike = handleDeleteLike;
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
        this._counterLikes = this._newCard.querySelector('.elements__likes-count');
        this.refreshCountLikes(this._numberOfLikes);
    }

    _setEventListeners() {
        this._btnLike = this._newCard.querySelector('.elements__like');
        this._btnLike.addEventListener('click', () => {
            if(this._isLiked) {
                this._handleDeleteLike();
            } else {
                this._handlePutLike();
            }
        });

        this._btnDelete = this._newCard.querySelector('.elements__delete');
        this._btnDelete.addEventListener('click', () => this._handleDeleteClick(this.deleteCard.bind(this), this.cardId));

        this._photo.addEventListener('click', () => this._handleImageClick(this._name, this._link));
    }

    likeCard() {
        this._btnLike.classList.add('elements__like_active');
        this._isLiked = true;
    }

    unlikeCard() {
            this._btnLike.classList.remove('elements__like_active');
            this._isLiked = false;
    }

    refreshCountLikes(number) {
        this._counterLikes.textContent = number;
    }

    _checkIsLiked() {
        for (let i = 0; i < this._arrayOfLikes.length; i++) {
            if(this._arrayOfLikes[i]._id === this._userId) {
                this.likeCard();
                break
            }
        }
    }

    _checkOwnerCard() {
        if (this._ownerId !== this._userId) {
            this._btnDelete.classList.add('elements__delete_type_hidden');
        }

    }

    deleteCard() {
        this._newCard.remove();
        this._newCard = null;
    }

    getCard() {
        this._createCard();
        this._addData();
        this._setEventListeners();
        this._checkOwnerCard();
        this._checkIsLiked();
        return this._newCard
    }
}

export default Card;