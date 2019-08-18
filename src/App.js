import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Enterprise from "./pages/Enterprise";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Review from "./pages/Review";

import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Row className='m-0'>
					<Col xs='12' md='3' className='p-0'>
						<Sidebar />
					</Col>

					<Col xs='12' md='9' className='p-0'>
						<Switch>
							<Route exact path='/' component={Home} />

							<Route exact path='/profile' component={Profile} />
							<Route exact path='/enterprise' component={Enterprise} />
							<Route exact path='/timeline' component={Project} />
							<Route exact path='/timeline/:id' component={ProjectDetails} />
							<Route exact path='/review' component={Review} />
						</Switch>
					</Col>
				</Row>
			</BrowserRouter>
		);
	}
}
