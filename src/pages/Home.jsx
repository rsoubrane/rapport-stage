/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
