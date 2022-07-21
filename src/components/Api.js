export default class Api {
  constructor({ headers, baseUrl }) {
    (this.headers = headers),
      (this.baseUrl = baseUrl),
      (this._handleResponse = (res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getProfile() {
    return fetch(this.baseUrl + "/users/me", {
      headers: this.headers,
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this.headers,
    }).then(this._handleResponse);
  }
  changeProfile(name, about) {
    fetch(this.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      }),
    })
    .then(this._handleResponse)
  }
  addCard(name, link) {
    fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    })
    .then(this._handleResponse);
  }
  // другие методы работы с API
}
