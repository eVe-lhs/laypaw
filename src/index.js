import ReactDom from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./main.css";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
