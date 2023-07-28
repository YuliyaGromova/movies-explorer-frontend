import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    function toogleHeader() {
        props.header(false);
      }
      function toogleFooter() {
        props.footer(false);
      }
      React.useEffect(() => {
        toogleHeader();
        toogleFooter();
      }, []);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <section className="not-found-page">
            <h1 className="not-found-page__error-code">404</h1>
            <p className="not-found-page__error-message">Страница не найдена</p>
            <Link className="not-found-page__back link" onClick={goBack}>Назад</Link>
        </section>
    )
}

export default NotFoundPage;