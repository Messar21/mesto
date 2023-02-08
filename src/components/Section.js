export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(dataCards, userId) {
        dataCards.forEach((item) => {
            this._renderer(item, userId);
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}