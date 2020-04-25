import React, { useContext } from "react";
import SVG from "svg-inline-react";

import { LangContext } from "../../lang-context";

import "./style.less";

const PHOTO = {
  JPG: "/img/photo.jpg",
  WEBP: "/img/photo.webp",
};

const ICONS = {
  mail: require("../../imgs/gmail.svg"),
  telegram: require("../../imgs/telegram.svg"),
  github: require("../../imgs/github.svg"),
  location: require("../../imgs/location.svg"),
  vk: require("../../imgs/vk.svg"),
  facebook: require("../../imgs/facebook.svg"),
};

const ICON_STYLE = {
  width: 32,
  height: 32,
  overflow: "hidden",
  display: "block",
};

const wrapIcon = (icon) => <SVG src={icon} style={ICON_STYLE} />;

export default function Index() {
  const locale = useContext(LangContext);

  return (
    <div className="person" itemScope itemType="http://schema.org/Person">
      <header className="person__head">
        <picture>
          <source srcSet={PHOTO.WEBP} type="image/webp" />
          <source srcSet={PHOTO.JPG} type="image/jpeg" />
          <img
            src={PHOTO.JPG}
            alt={locale.imageAlt}
            height="200"
            width="200"
            className="person__photo"
            itemProp="image"
          />
        </picture>

        <h1 className="person__name" itemProp="name" title={locale.name}>
          {locale.name}
        </h1>
      </header>

      <main className="contacts">
        <a
          className="contacts__item"
          itemProp="email"
          href="mailto:shibakow@gmail.com"
        >
          <span className="contacts__icon">{wrapIcon(ICONS.mail)}</span>
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
          <span className="contacts__icon">{wrapIcon(ICONS.telegram)}</span>
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
          <span className="contacts__icon">{wrapIcon(ICONS.github)}</span>
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
          <span className="contacts__icon">
            {wrapIcon(ICONS[locale.socnetIcon])}
          </span>
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
          <span className="contacts__icon">{wrapIcon(ICONS.location)}</span>
          <div className="contacts__body">
            <h2 className="contacts__title">{locale.locationTitle}</h2>
            <p className="contacts__text">{locale.locationVal}</p>
          </div>
        </a>
      </main>
    </div>
  );
}
