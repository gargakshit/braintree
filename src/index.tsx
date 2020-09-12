import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import "./styles/links.scss";
import "./styles/fonts.scss";
import "./styles/prism.scss";
import "./styles/tables.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
