import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import "./index.scss";
import App from "./components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
