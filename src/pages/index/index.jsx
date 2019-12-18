import React, { useContext } from "react";

import { LangContext } from "../../lang-context";

import "./style.less";

export default function Index() {
  const locale = useContext(LangContext);

  return (
    <div className="person" itemScope itemType="http://schema.org/Person">
      <header className="head">
        <img
          className="photo"
          itemProp="image"
          src="/img/photo.jpg"
          alt={locale.imageAlt}
          height="200"
          width="200"
        />
        <h1 className="name" itemProp="name" title={locale.name}>
          {locale.name}
        </h1>
      </header>
      <main className="contacts">
        <a
          className="contacts__item"
          itemProp="email"
          href="mailto:shibakow@gmail.com"
        >
          <span className="contacts__icon icon icon--mail"></span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.email}</h2>
            <p className="contacts__text">shibakow@gmail.com</p>
          </div>
        </a>
        <a
          className="contacts__item contacts__item--fav"
          itemProp="sameAs"
          href="https://t.me/shibakow"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon icon icon--telegram"></span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.telegram}</h2>
            <p className="contacts__text">shibakow</p>
          </div>
        </a>
        <a
          className="contacts__item"
          itemProp="sameAs"
          href="https://github.com/saionaro"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon icon icon--github"></span>
          <div className="contacts__body">
            <h2 className="contacts__title">Github</h2>
            <p className="contacts__text">Saionaro</p>
          </div>
        </a>
        <a
          className="contacts__item"
          itemProp="sameAs"
          href={locale.socnetRef}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className={`contacts__icon icon ${locale.socnetIcon}`}></span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.socnetTitle}</h2>
            <p className="contacts__text">{locale.socnetVal}</p>
          </div>
        </a>
        <a
          className="contacts__item"
          href={locale.locationRef}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <span className="contacts__icon icon icon--location"></span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.locationTitle}</h2>
            <p className="contacts__text">{locale.locationVal}</p>
          </div>
        </a>
      </main>
    </div>
  );
}
