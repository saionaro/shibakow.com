import React from 'react';
import { renderToString } from 'react-dom/server';

import Html from './pages/index';

import 'normalize.css/normalize.css';

const generateWithLocale = (locale) => {
  return `<!doctype HTML>${renderToString(<Html lang={locale} includeGa={true}/>)}`;
};

export const localized = [{
  code: 'en',
  content: generateWithLocale('en')
}, {
  code: 'ru',
  content: generateWithLocale('ru')
}];
