import Popup from "./Popup";

export default class PopupAccept extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => this._handleSubmit(evt))
    }

    open(acceptFunction, cardId) {
        super.open();
        this.cardId = cardId;
        this.accept = acceptFunction;
    }
}