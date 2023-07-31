/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio_label"> Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <p className="portfolio__name-link">Статичный сайт</p>
          <a className="link-to-project button" href="https://github.com/YuliyaGromova/how-to-learn.git" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__name-link">Адаптивный сайт</p>
          <a className="link-to-project button" href="https://github.com/YuliyaGromova/russian-travel.git" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__name-link">Одностраничное приложение</p>
          <a className="link-to-project button" href="https://github.com/YuliyaGromova/react-mesto-api-full-gha.git" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
