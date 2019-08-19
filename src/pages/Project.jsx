import React, { Component } from "react";

import { Container } from "reactstrap";

import Header from "../components/Header/Header";
import TimelineItem from "../components/Timeline/TimelineItem";

import "../assets/styles/Timeline.css";
export default class Project extends Component {
	constructor(props) {
		super(props);

		console.log(this.props.timeline);
		this.state = {
			timeline: this.props.timeline
		};
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
								redirection={"/timeline/" + item.redirection}
								key={key}
							/>
						))}
					</ul>
				</Container>
			</main>
		);
	}
}
