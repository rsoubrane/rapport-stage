import React, { Component } from "react";

import ProfileSocials from "./ProfileSocials";

import { Jumbotron, Row, Col } from "reactstrap";

import profile from "../../assets/medias/profile.jpg";

export default class ProfileCard extends Component {
	render() {
		return (
			<Jumbotron>
				<Row className='align-items-center'>
					<Col xs='9'>
						<h1 className='display-4 text-center'>Romain Soubrane</h1>
						<hr />
						<p className='lead text-center'>Développeur web à onepoint.</p>
					</Col>
					<Col xs='3' className='text-center'>
						<img src={profile} alt='' className='mx-auto rounded-circle img-fluid' />
						<br />
					</Col>
				</Row>

				<Row className='mt-4'>
					<Col className='card-text'>
						<p className='text-justify'>
							Passionné par l'univers du digital, je me suis spécialisé dans le développement web et plus
							précisément le développement JavaScript (React et Node). Ma formation et mes expériences
							professionnelles me permettent d'avoir un point de vue plus global d'un projet, mais
							également de travailler en utilisant les méthodes agiles.
						</p>

						<p>
							<strong>Code : </strong>
							<span className='badge bg-success'>HTML/CSS/JS/PHP</span>
							<span className='badge bg-info'>WordPress</span>
							<span className='badge bg-primary'>React/Node</span>
							<span className='badge bg-danger'>Python/JAVA</span>
						</p>
						<p>
							<strong>Skills : </strong> Compétences managériales, Capacité décisionnelle, Sens de
							l’organisation, Travail d’équipe{" "}
						</p>
						<p>
							<strong>Agile : </strong> Scrum, Kanban, Lean{" "}
						</p>
						<p>
							<strong>Languages : </strong> Français, Anglais (4 ans à Londres et 9 mois à Los Angeles){" "}
						</p>
					</Col>
				</Row>

				<ProfileSocials />
			</Jumbotron>
		);
	}
}
