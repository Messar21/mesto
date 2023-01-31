import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formElement = this._popupElement.querySelector('.popup__form');
    }

    setInputValues(inputsData) {
        this._inputList.forEach(input => {
            input.value = inputsData[input.name];
        })
    }

    _getInputValues() {
        const formData = {};
        this._inputList.forEach(input => {
            formData[input.name] = input.value;
        });
        return formData
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => this._handleSubmit(this._getInputValues(), evt))
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}