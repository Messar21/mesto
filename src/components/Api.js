export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    sendUserInfo(name, about) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    setNewAvatar(link) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                    avatar: link
                }
            )
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    postNewCard({ name, link }) {
        return fetch(`${this._baseUrl}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => {
                this._getResponseData(res);
            })
            
    }

    putLikeToCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    deleteLikeToCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => {
                this._getResponseData(res);
            })
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`); 
        }
        return res.json();
    } 
}