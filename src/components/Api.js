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
            .then((data) => {
                return data;
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
}