
class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _checkResult(res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(this._baseUrl + `/beatfilm-movies`, {
            // credentials: "include",
            method: "GET",
          }).then((res) => {
            return this._checkResult(res);
          });
    }
}

export const api = new Api({
    baseUrl: "https://api.nomoreparties.co",
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default api;