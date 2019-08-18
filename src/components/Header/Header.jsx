import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import "../../assets/styles/Header.css";

export default class Header extends Component {
	render() {
		return (
			<main className='page-header'>
				<div className='page-caption'>
					<h1 className='page-title'>{this.props.title}</h1>
				</div>
			</main>
		);
	}
}
