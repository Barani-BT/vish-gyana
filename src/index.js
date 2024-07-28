import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./components/redux/store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
