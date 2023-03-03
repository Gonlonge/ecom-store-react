import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Theme from "./components/styled-components/Theme";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Theme>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Theme>,
  document.getElementById("root")
);

reportWebVitals();
