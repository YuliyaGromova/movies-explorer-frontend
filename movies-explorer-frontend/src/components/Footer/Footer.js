import React from "react";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm</p>
      <div className="footer__links">
        <p className="footer__year">&copy; 2023</p>
        <a
          href="https://practicum.yandex.ru/"
          className="footer__yap link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          href="https://github.com/"
          className="footer__github link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </section>
  );
}

export default Footer;
