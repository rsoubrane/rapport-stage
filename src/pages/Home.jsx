import React, { Component } from "react";

import { Container, Row } from "reactstrap";

import Header from "../components/Header/Header";
import Post from "../components/Home/Post";
import Article from "../components/Home/Article";
import BlogSidebar from "../components/Home/BlogSidebar";

import enterprise from "../assets/medias/enterprise.jpg";
import project from "../assets/medias/project.jpg";
export default class Home extends Component {
	render() {
		return (
			<main>
				<Header title='Rapport de stage' />

				{/* <Preloader /> */}

				<Container>
					<Row>
						<Row className='my-3 w-100 px-3'>
							<Post
								title='Une entreprise en or ?'
								description="Apprenez-en-plus sur onepoint, l'un des leaders de la transformation digitale situé à deux pas de la Tour Eiffel !"
								picture={enterprise}
								redirection='/enterprise'
							/>
							<Post
								title='Des projets intéressants ?'
								description="Venez décvouvrir sur quels projets j'ai pu travailler durant ces 5 mois de stage."
								picture={project}
								redirection='/timeline'
							/>
						</Row>
						<Row className='my-3 w-100 px-3'>
							<Article />
							<BlogSidebar />
						</Row>
					</Row>
				</Container>
			</main>
		);
	}
}
