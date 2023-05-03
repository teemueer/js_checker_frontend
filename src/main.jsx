import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_fi from "./translations/fi/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.localStorage.getItem("language") || "en",
  resources: {
    en: {
      common: common_en,
    },
    fi: {
      common: common_fi,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </HashRouter>
);
