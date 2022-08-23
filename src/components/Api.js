export default class Api {
  constructor({ headers, baseUrl }) {
    (this._headers = headers),
      (this._baseUrl = baseUrl),
      (this._handleResponse = (res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getProfile() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: this._headers,
    }).then(this._handleResponse);
  }
  changeProfile(name, about) {
    fetch(this._baseUrl + `/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      }),
    }).then(this._handleResponse);
  }
  addCard(data) {
   return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }
  setLike(_id) {
    return fetch(this._baseUrl + "/cards/" + _id + "/likes", {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }
   // Удалить лайк
   removeLike(_id) {
    return fetch(this.baseUrl + `/cards/` + _id + `/likes/`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._handleResponse)
  }

  changeAvatar(link) {
     fetch(this._baseUrl + `/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify( link )
    })
      .then(this._handleResponse);
  }
  // другие методы работы с API
}
