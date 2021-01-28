import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import RootApp from "./routes";
import AppProvider from "./state";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <RootApp />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
