import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// to import material.css and js files from react-mdl
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
// to import BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById("root")
);
