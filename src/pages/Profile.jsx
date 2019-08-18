import React, { Component } from "react";

import { Container } from "reactstrap";

import Header from "../components/Header/Header";

import ProfileCard from "../components/Profile/ProfileCard";
import ProfileDetails from "../components/Profile/ProfileDetails";

export default class Profile extends Component {
	render() {
		return (
			<main>
				<Header title={"Profile"} />
				<ProfileCard />
				<ProfileDetails />
			</main>
		);
	}
}
