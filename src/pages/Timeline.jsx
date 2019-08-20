import React, { Component } from "react";

import app from "../components/Firebase/base";
import { Container } from "reactstrap";

import Header from "../components/Header/Header";
import TimelineItem from "../components/Timeline/TimelineItem";

import "../assets/styles/Timeline.css";

export default class Timeline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timeline: []
		};
	}

	componentDidMount() {
		let data = app.database().ref("timeline");
		data.on("value", snapshot => {
			let timeline = snapshot.val();

			console.log("timeline: ", timeline);
			this.setState({ timeline });
		});
	}

	render() {
		return (
			<main>
				<Header title='Timeline' />

				<Container>
					<ul className='timeline'>
						{/* <Timeline /> */}
						{this.state.timeline.map((item, key) => (
							<TimelineItem
								title={item.name}
								paragraph1={item.paragraph1}
								paragraph2={item.paragraph2}
								languages={item.languages}
								missions={item.missions}
								images={item.images}
								date={item.date}
								redirection='/timeline'
								key={key}
							/>
						))}
					</ul>
				</Container>
			</main>
		);
	}
}