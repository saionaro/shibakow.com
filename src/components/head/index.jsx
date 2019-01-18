import React from 'react';
import { LangContext } from '../../lang-context';

export default function Head() {
  return (
    <LangContext.Consumer>
      {(locale) => (
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>{locale.title}</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="16x16" href="/icons/16.png" />
          <link rel="icon" sizes="32x32" href="/icons/32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180.png" />
          <link rel="stylesheet" href="/styles.css" />
          <meta name="description" content={locale.description} />
        </head>
      )}
    </LangContext.Consumer>
  );
}
