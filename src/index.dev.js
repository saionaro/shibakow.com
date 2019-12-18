import React from "react";
import ReactDOM from "react-dom";

import Index from "./pages/index";
import { LangContext, locales } from "./lang-context";

import "normalize.css/normalize.css";
import "./components/body/style.less";
import "./components/html/style.less";

const root = document.createElement("div");
root.classList.add("content-wrapper");
document.body.appendChild(root);

ReactDOM.render(
  <LangContext.Provider value={locales.en}>
    <Index />
  </LangContext.Provider>,
  root
);
