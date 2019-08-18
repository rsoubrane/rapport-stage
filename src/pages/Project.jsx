import React, { Component } from "react";

import { Container } from "reactstrap";

import app from "../components/Firebase/base";

import Header from "../components/Header/Header";
import TimelineItem from "../components/Timeline/TimelineItem";

import "../assets/styles/Timeline.css";
export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		let data = app.database().ref("projects");
		data.on("value", snapshot => {
			let projects = snapshot.val();

			console.log("projects: ", projects);
			this.setState({ projects });
		});
	}

	render() {
		return (
			<main>
				<Header title='Projects' />

				<Container>
					<ul className='timeline'>
						<TimelineItem />
						<TimelineItem />
						<TimelineItem />
						<TimelineItem />
					</ul>
				</Container>
			</main>
		);
	}
}
