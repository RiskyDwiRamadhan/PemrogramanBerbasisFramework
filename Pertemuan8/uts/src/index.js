import React from "react";
import ReactDOM from "react-dom";
import Main from "./homepage/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import "./assets/css/style.css";

 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);

reportWebVitals();