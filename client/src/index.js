import React from "react";
import 'antd/dist/antd.min.css'
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./app/store";

const Container = document.getElementById("root");
const root = createRoot(Container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
