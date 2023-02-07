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
            })
    }
}