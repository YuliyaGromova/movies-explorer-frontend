class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._baseMovieUrl = options.baseMovieUrl;
    this._headers = options.headers;
    this._authorization = options.headers.Authorization;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  // регистрация пользователя
  register(name, password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // авторизация пользователя
  authorize(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: 'GET',   
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => data)
  }

  // Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(this._baseUrl + `/users/me`, {
      credentials: "include",
      method: "GET",
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // Загрузка карточек с сервера // сохраненные карточки
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "GET",
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // Редактирование профиля
  editUserInfo(data) {
    return fetch(this._baseUrl + `/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // Добавление новой карточки // из карточки которая нашлась в результате поиска
  addNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: this._baseMovieUrl+data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: this._baseMovieUrl+data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // Удаление карточки
  deleteMoviesApi(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, {
      credentials: "include",
      method: "DELETE",
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  // Постановка лайка: добавляем карточку в сохраненные addNewMovie
  // putLike(movieId) {
  //   return fetch(this._baseUrl + `/cards/${movieId}/likes`, {
  //     credentials: 'include',
  //     method: "PUT",
  //   }).then((res) => {
  //     return this._checkResult(res);
  //   });
  // }
  // удаляем карточку из сохраненных delete
  // takeOfLike(cardId) {
  //   return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
  //     credentials: 'include',
  //     method: "DELETE",
  //   }).then((res) => {
  //     return this._checkResult(res);
  //   });
  // }

  // changeLikeCardStatus(cardId, newStateLike) {
  //   if (newStateLike) {
  //     return this.putLike(cardId);
  //   } else {
  //     return this.takeOfLike(cardId);
  //   }
}

export const api = new Api({
  // baseUrl: "https://api.gromova.students.nomoreparties.sbs",
  baseUrl: "http://localhost:3000",
  baseMovieUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
