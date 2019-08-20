import React, { Component } from "react";

import { Container, Row } from "reactstrap";

import Header from "../components/Header/Header";
import Article from "../components/Blog/Article";
import BlogSidebar from "../components/Blog/BlogSidebar";

export default class Home extends Component {
	render() {
		return (
			<main>
				<Header title='Rapport de stage' />

				<Container>
					<Row>
						<Article />
						<BlogSidebar />
					</Row>
				</Container>
			</main>
		);
	}
}
