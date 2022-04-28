class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = this._headers.authorization;
    this._contentType = this._headers["Content-Type"];
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          `Ошибка запроса данных пользователя: ${res.status}`
        );
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }

  patchUserInfo({ name, speciality }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        about: speciality,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          `Ошибка обновления данных пользователя: ${res.status}`
        );
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }

  patchUserAvatar(linkOfAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        avatar: linkOfAvatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          `Ошибка обновления аватара пользователя: ${res.status}`
        );
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка запроса данных карточек: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }
  postCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          `Ошибка добавления новой карточки: ${res.status}`
        );
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }
  deleteCard(card) {
    return fetch(`${this._baseUrl}/cards/${card.getId()}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка удаления карточки: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }

  putLike(card) {
    return fetch(`${this._baseUrl}/cards/${card.getId()}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка добавления лайка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }

  deleteLike(card) {
    return fetch(`${this._baseUrl}/cards/${card.getId()}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка удаления лайка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject("");
      });
  }
}

export { Api };
