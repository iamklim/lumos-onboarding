import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import "./index.scss";
import initialState from "./state/initial-state";
import reducer from "./state/reducer";
import { StateProvider } from "./state/state";
import App from "./components/app/app";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
