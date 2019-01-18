import React from 'react';
import PropTypes from 'prop-types';
import { LangContext } from '../../lang-context';
import './style.less';

export default function LangSelector () {
  return (
    <LangContext.Consumer>
      {(locale) => (
        <aside className="lang-selector">
          <ul className="lang-selector__list">
            {locale.lang !== 'en' && (
              <li className="lang-selector__item">
                <a className="lang-selector__link" href="/en">en</a>
              </li>
            )}
            {locale.lang !== 'ru' && (
              <li className="lang-selector__item">
                <a className="lang-selector__link" href="/">ru</a>
              </li>
            )}
          </ul>
        </aside>
      )}
    </LangContext.Consumer>
  );
}

LangSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.element,
  includeGa: PropTypes.bool,
};
