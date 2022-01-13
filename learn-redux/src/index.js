import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import allReducers from "./reducers";

//Store -> Globalized State
const store = createStore(allReducers);
//Actions ->
// Increment
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

// Decrement
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Reducers ->

//Dispatcher

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
