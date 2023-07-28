import React from "react";

function Portfolio() {
    return(
       <section className="portfolio">
        <h3 className="portfolio_label"> Портфолио</h3>
        <ul className="portfolio__links">
            <li className="portfolio__link"><p className="portfolio__name-link">Статичный сайт</p><button className="link-to-project"></button></li>
            <li className="portfolio__link"><p className="portfolio__name-link">Адаптивный сайт</p><button className="link-to-project"></button></li>
            <li className="portfolio__link"><p className="portfolio__name-link">Одностраничное приложение</p><button className="link-to-project"></button></li>
        </ul>
       </section>
    )
}
export default Portfolio;