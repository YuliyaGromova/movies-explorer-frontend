import React from "react";

function AboutProject(props) {
  return (
    <section className="about-project" id='project'>
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <h3 className="about-project__info-title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__info-detail">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className="about-project__info">
        <h3 className="about-project__info-title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__info-detail">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__diagram">
        <div className="about-project__level">
          <p className="about-project__week first-week">1 неделя</p>
          <p className="about-project__week level-info">Back-end</p>
        </div>
        <div className="about-project__level">
          <p className="about-project__week last-week">4 недели</p>
          <p className="about-project__week level-info">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
