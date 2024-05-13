import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/climate-systems">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
// https://github.com/19alexandr80/climate-systems.git
