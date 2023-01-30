import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(selector, submit) {
        super(selector);
        this._submit = submit;
    }

    _getInputValues() {

    }

    setEventListeners() {

    }
}