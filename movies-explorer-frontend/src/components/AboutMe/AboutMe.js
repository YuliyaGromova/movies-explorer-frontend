import React from "react";
import myPhoto from "../../images/myPhoto.JPG";

function AboutMe() {
  return (
    <section className="about-me" id="me">
      <h2 className="about-me__title">Студент</h2>
      <img
        className="about-me__my-photo"
        src={myPhoto}
        alt="здесь должна быть моя фотография"
      />
      <h3 className="about-me__name">Юлия</h3>
      <p className="about-me__info">WEB-разработчик, 36 лет</p>
      <p className="about-me__info-detail">
        Я родилась и живу в Коврове, закончила факультет Автоматики и
        Электроники в КГТА. У меня есть дочь. На данный момент нахожусь в
        отпуске по уходу за ребенком. С 2009 года работаю в компании
        ООО«ЭОС(СОФТ)». После окончания курса "Веб-разработчик" планирую
        заниматься фриланс-заказами.
      </p>
      <a
        href="https://github.com/YuliyaGromova"
        target="_blank"
        rel="noopener noreferrer"
        className="about-me__github link"
      >
        Github
      </a>
    </section>
  );
}

export default AboutMe;
