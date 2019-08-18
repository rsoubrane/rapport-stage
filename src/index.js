import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
