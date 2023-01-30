import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector, submit) {
        super(selector);
        this._submit = submit;
    }

    _getInputValues(selectorName, selectorAbout) {
        this.inputValueName = this._popupElement.querySelector(selectorName).value;
        this.inputValueAbout = this._popupElement.querySelector(selectorAbout).value;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.querySelector('.popup__form').addEventListener('submit', (evt) => this._submit(evt))
    }

    close() {
        super.close();
        this._popupElement.querySelector('.popup__form').reset();
    }
}