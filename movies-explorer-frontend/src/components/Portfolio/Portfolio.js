/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import link from "../../images/link.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__label"> Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a
            href="https://github.com/YuliyaGromova/how-to-learn.git"
            className="portfolio__link link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__name-link">Статичный сайт</p>
            <img
              className="portfolio__link-to-project button"
              src={link}
              alt="стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/YuliyaGromova/russian-travel.git"
            className="portfolio__link link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__name-link">Адаптивный сайт</p>
            <img
              className="portfolio__link-to-project button"
              src={link}
              alt="стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/YuliyaGromova/react-mesto-api-full-gha.git"
            className="portfolio__link link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__name-link">Одностраничное приложение</p>
            <img
              className="portfolio__link-to-project button"
              src={link}
              alt="стрелка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
