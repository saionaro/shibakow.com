import React from "react";
import ReactDOM from "react-dom";

import Html from "./pages/index";

import "normalize.css/normalize.css";

// const root = document.createElement("div");

// document.body.appendChild(root);

ReactDOM.render(<Html lang="en" includeGa={false} />, document.documentElement);
