import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route path="/:grade/:section/:gender" component={NavBar} />
  </Router>,
  document.getElementById("root")
);
