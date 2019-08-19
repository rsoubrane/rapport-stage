/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import rooftop from "../assets/medias/rooftop.jpg";
export default class Home extends Component {
	render() {
		return (
			<main>
				<div className='w-100 p-3 p-md-5 text-white bg-dark page-header'>
					<Col md='6' className='px-0'>
						<h1 className='display-4 font-italic'>Rapport de stage</h1>
						<p className='lead my-3'>
							Le récit incroyable d'un stage très épanouissant dans l'un des plus grands cabinets de
							conseils en transformation digitale, localisé à 2 pas de la Tour Eiffel ..
						</p>
						<p className='lead mb-0'>
							<Link to='/timeline' className='text-white font-weight-bold'>
								En lire plus...
							</Link>
						</p>
					</Col>
				</div>

				<Container role='main'>
					<Row>
						<Col md='8' className='blog-main'>
							<div className='blog-post'>
								<h3 className='pb-3 mb-2 font-italic border-bottom'>From the rooftop ...</h3>

								<p className='blog-post-meta'>
									August 20, 2019 by <Link to='/profile'>Romain</Link>
								</p>

								<p>
									Encore trois jours. trois jours et mon stage touchera à sa fin. J'aurais passé près
									de 5 mois dans les locaux magnifiques de onepoint (mais pas que !) et cette
									expérience fut, tout aussi intense qu'instructive. Qui dit fin de stage dit
									également rapport de stage et compte-rendu d'expérience. Quoi de mieux qu'un site en
									React pour illustrer un stage qui avait pour vocation de me faire découvrir ce monde
									? Je vais donc me poser face à ce magnifique monument et commencer à coder !
								</p>

								<img src={rooftop} className='w-100 mt-2 mb-3' alt='Rooftop' />

								<blockquote>
									<p>
										Pour être en mesure de faire un bilan de mon stage il faut d’abord que j’aborde
										les différents <Link to='/timeline'>projets</Link> sur lesquels j’ai eu la
										chance de travailler que ce soit à onepoint ou ailleurs.
									</p>
								</blockquote>
							</div>
						</Col>

						<aside className='col-md-4 blog-sidebar'>
							<div className='p-3 mb-3 bg-light rounded'>
								<h4 className='font-italic'>About</h4>
								<p className='mb-0'>
									Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
									purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
								</p>
							</div>

							<div className='p-3'>
								<h4 className='font-italic'>Archives</h4>
								<ol className='list-unstyled mb-0'>
									<li>
										<Link to='/timeline'>2019</Link>
									</li>
									<li>
										<Link to='/'>2018</Link>
									</li>
								</ol>
							</div>

							<div className='p-3'>
								<h4 className='font-italic'>Socials</h4>
								<ol className='list-unstyled'>
									<li>
										<a href='https://github.com/rsoubrane/' target='_blank'>
											GitHub
										</a>
									</li>
									<li>
										<a href='https://www.linkedin.com/in/rsoubrane/' target='_blank'>
											LinkedIn
										</a>
									</li>
									<li>
										<a href='https://twitter.com/EpticRS' target='_blank'>
											Twitter
										</a>
									</li>
								</ol>
							</div>
						</aside>
					</Row>
				</Container>
			</main>
		);
	}
}
