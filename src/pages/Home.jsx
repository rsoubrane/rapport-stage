import React, { Component } from "react";

import { Container, Jumbotron } from "reactstrap";

import Deck from "../components/Decks/Deck";

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Jumbotron className='text-center'>
					<h1 className='display-4'>Rapport de stage</h1>
					<hr style={{ marginTop: "25px" }} />
				</Jumbotron>

				<Deck />
			</Container>
		);
	}
}
