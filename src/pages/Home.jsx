import React, { Component } from "react";

import { Container, Row } from "reactstrap";

import Header from "../components/Header/Header";
import Post from "../components/Post/Post";
import Article from "../components/Blog/Article";
import BlogSidebar from "../components/Blog/BlogSidebar";

import enterprise from "../assets/medias/enterprise.jpg";
import project from "../assets/medias/project.jpg";
export default class Home extends Component {
	render() {
		return (
			<main>
				<Header title='Rapport de stage' />

				<Container>
					<Row>
						<Row className='m-3 w-100'>
							<Post
								title='Une entreprise en or ?'
								description="Découvrez-en-plus sur onepoint, l'un des leaders de la transformation digitale"
								picture={enterprise}
								redirection='/enterprise'
							/>
							<Post
								title='Des projets intéressants ?'
								description='Venez décvouvrir à quelle sauce le stagiaire a été mangé'
								picture={project}
								redirection='/projects'
							/>
						</Row>
						<Article />
						<BlogSidebar />
					</Row>
				</Container>
			</main>
		);
	}
}
