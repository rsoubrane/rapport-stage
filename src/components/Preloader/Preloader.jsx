import React, { Component } from "react";

import "../../assets/styles/Preloader.css";

export default class Preloader extends Component {
	render() {
		return (
			<div id='preloader'>
				<div id='loader' />
			</div>
		);
	}
}
