export default class UserInfo{
    constructor({ selectorName, selectorAbout, selectorAvatar }) {
        this._name = document.querySelector(selectorName);
        this._about = document.querySelector(selectorAbout);
        this._avatar = document.querySelector(selectorAvatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._about.textContent = about;
    }

    setUserAvatar(link) {
        this._avatar.src = link;
    }
}