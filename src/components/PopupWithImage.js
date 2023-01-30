import {imageCaption, imageSrc} from "../utils/constants";
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
    }

    open(link, name) {
        super.open();
        imageSrc.src = link;
        imageSrc.alt = name;
        imageCaption.textContent = name;
    }
}