class FormValidator {
    constructor(options, formElement) {
        this._inputSelector = options.inputSelector;
        this._submitButtonSelector = options.submitButtonSelector;
        this._inactiveButtonClass = options.inactiveButtonClass;
        this._inputErrorClass = options.inputErrorClass;
        this._errorClass = options.errorClass;
        this._formElement = formElement;
    }

    _setEventListeners() {
        this._formElement.addEventListener('reset', () => {
            this._disableSubmitButton();
        });
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleStateButton();
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleStateButton();
            });
        });
    }

    _toggleStateButton() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    _disableSubmitButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }

    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }

    _showError(input, validationMessage) {
        input.classList.add(this._inputErrorClass);
        const errorMessage = this._formElement.querySelector(`.${input.id}-error`);
        errorMessage.textContent = validationMessage;
        errorMessage.classList.add(this._errorClass);
    }

    _hideError(input) {
        input.classList.remove(this._inputErrorClass);
        const errorMessage = this._formElement.querySelector(`.${input.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
    }

    enableValidation() {
        this._setEventListeners();
    }
}

export default FormValidator;