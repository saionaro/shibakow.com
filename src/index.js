import React from "react";
import { renderToString } from "react-dom/server";

import HTML from "./components/html";
import Index from "./pages/index";

import "normalize.css/normalize.css";

const generateWithLocale = (locale) => {
  return `<!doctype HTML>${renderToString(
    <HTML lang={locale} includeGa={true}>
      <Index />
    </HTML>
  )}`;
};

export const localized = [
  {
    code: "en",
    content: generateWithLocale("en"),
  },
  {
    code: "ru",
    content: generateWithLocale("ru"),
  },
];
