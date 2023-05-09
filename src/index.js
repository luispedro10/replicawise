import React from "react";
import ReactDOM from "react-dom";
import StartApp from "./components/StartApp";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
<link rel="icon" href="favicon.webp" />


const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<StartApp />, document.getElementById("root"));

