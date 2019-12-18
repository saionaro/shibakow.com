import React from "react";
import PropTypes from "prop-types";

import Ga from "../ga";
import LangSelector from "../lang-selector";

import "./style.less";

export default function Body({ children, includeGa }) {
  return (
    <body>
      <LangSelector />
      {children}
      {includeGa && <Ga />}
    </body>
  );
}

Body.propTypes = {
  children: PropTypes.element,
  includeGa: PropTypes.bool
};
