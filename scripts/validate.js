const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((form) => {
        setEventListeners(form, options);
    });
};

const setEventListeners = (form, options) => {
    const inputList = Array.from(form.querySelectorAll(options.inputSelector));
    const submitButton = form.querySelector(options.submitButtonSelector);
    toggleStateButton(inputList, submitButton, options);
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(form, input, options);
            toggleStateButton(inputList, submitButton, options);
        });
    });
};

const isValid = (form, input, options) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, options);
    } else {
        hideError(form, input, options);
    }
};

const showError = (form, input, validationMessage, options) => {
    input.classList.add(options.inputErrorClass);
    const errorMessage = form.querySelector(`.${input.id}-error`);
    errorMessage.textContent = validationMessage;
    errorMessage.classList.add(options.errorClass);
}

const hideError = (form, input, options) => {
    input.classList.remove(options.inputErrorClass);
    const errorMessage = form.querySelector(`.${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(options.errorClass);
}

const toggleStateButton = (inputList, submitButton, options) => {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(options.inactiveButtonClass);
        submitButton.setAttribute('disabled', true);
    } else {
        submitButton.classList.remove(options.inactiveButtonClass);
        submitButton.removeAttribute('disabled');
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
});

export default enableValidation;