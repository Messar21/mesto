import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._btnSave = this._popupElement.querySelector('.popup__save');
        this._previousState = this._btnSave.textContent;
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
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues())})
    }

    close() {
        super.close();
        this._formElement.reset();
    }

    startSaving() {
        this._btnSave.textContent = 'Сохранение...';
    }

    stopSaving() {
        this._btnSave.textContent = this._previousState;
    }
}