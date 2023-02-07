export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            method: 'GET',
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'GET',
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    sendUserInfo(name, about) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    setNewAvatar(link) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    avatar: link
                }
            )
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    postNewCard({ name, link }) {
        return fetch(`${this._baseUrl}cards`, {
            method: 'POST',
            headers: {
                authorization: this._headers.authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    putLikeToCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteLikeToCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}