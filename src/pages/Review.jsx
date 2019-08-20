import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Header from "../components/Header/Header";
import ReviewHeader from "../components/Review/ReviewHeader";
import ReviewItem from "../components/Review/ReviewItem";

import "../assets/styles/Review.css";

export default class Review extends Component {
	render() {
		return (
			<div>
				<Header title='Point de vue général' />
				<Container className='card-section timeline page-review'>
					<Container className='section-title mb-0 timeline-item bg-white rounded p-4 shadow'>
						<Row>
							<Col className='my-2 card-text'>
								<ReviewHeader />
							</Col>
						</Row>
					</Container>
				</Container>

				<Container>
					<Row className='container-reviews'>
						<ReviewItem
							title='Translator'
							enterprise='onepoint'
							date='14/06/2019'
							competences={[
								"Apprentissage et montée en compétences React",
								"Découverte du backend avec Node",
								"Premiers essais avec des services tels que SocketIO et ExpressJS",
								"Mise en application des compétences de design"
							]}
							apport={[
								"Gain de temps dans l’automatisation du projet",
								"Oeil “neuf” sur la vision du projet",
								"Propositions sur les axes d’améliorations/de changement"
							]}
							apprentissage={[
								"Le back c’est pas si mal",
								"J’ai encore énormément à découvrir et à apprendre pour être compétent",
								"Je suis pas si mauvais en design (enfin je pense ?)  "
							]}
						/>
						<ReviewItem
							title='Alpha.Connect'
							enterprise='IFS.Alpha'
							date='20/08/2019'
							competences={[
								"Montée en compétences React",
								"Découverte du backend avec JAVA",
								"Premiers essais cloud avec AWS",
								"Mise en application des compétences de design"
							]}
							apport={[
								"Nouvelles fonctionnalités (centre de notifications)",
								"Oeil “neuf” sur la vision du projet",
								"Propositions sur les axes d’améliorations/de changement",
								"Proposition de refonte de la plateforme"
							]}
							apprentissage={[
								"Le back c’est primordial",
								"Le boulot de software developer pourrait me convenir mais j’ai encore énormément à apprendre",
								"Je préfère travailler en plus petit comité "
							]}
						/>
					</Row>
				</Container>
			</div>
		);
	}
}
