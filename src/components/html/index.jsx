import React from "react";
import PropTypes from "prop-types";

import Head from "../head";
import Body from "../body";
import { LangContext, locales } from "../../lang-context";

import "./style.less";

export default function Html({ lang, includeGa, children }) {
  return (
    <html lang={lang}>
      <LangContext.Provider value={locales[lang]}>
        <Head />
        <Body includeGa={includeGa}>
          <div className="content-wrapper">{children}</div>
        </Body>
      </LangContext.Provider>
    </html>
  );
}

Html.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.element,
  includeGa: PropTypes.bool
};
