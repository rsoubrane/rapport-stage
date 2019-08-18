import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Enterprise from "./pages/Enterprise";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Review from "./pages/Review";

import "./App.css";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />

					<Route exact path='/profile' component={Profile} />
					<Route exact path='/enterprise' component={Enterprise} />
					<Route exact path='/projects' component={Project} />
					<Route exact path='/projects/:id' component={ProjectDetails} />
					<Route exact path='/review' component={Review} />
				</Switch>
			</BrowserRouter>
		);
	}
}
