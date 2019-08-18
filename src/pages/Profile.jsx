import React, { Component } from "react";

import { Container } from "reactstrap";

import ProfileCard from "../components/Profile/ProfileCard";
import ProfileDetails from "../components/Profile/ProfileDetails";

export default class Profile extends Component {
	render() {
		return (
			<Container>
				<ProfileCard />
				<ProfileDetails />
			</Container>
		);
	}
}
