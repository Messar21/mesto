import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this._popupElement.querySelector('.popup__image');
        this._popupCaption = this._popupElement.querySelector('.popup__caption');
    }

    open(name, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupCaption.textContent = name;
    }
}