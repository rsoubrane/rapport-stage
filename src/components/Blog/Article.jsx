import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Col } from "reactstrap";

import rooftop from "../../assets/medias/rooftop.jpg";

export default class Article extends Component {
	render() {
		return (
			<Col md='8' className='blog-main'>
				<div className='blog-post'>
					<h3 className='pb-3 mb-2 font-italic border-bottom'>From the rooftop ...</h3>

					<p className='blog-post-meta'>
						August 20, 2019 by <Link to='/profile'>Romain</Link>
					</p>

					<p>
						Encore trois jours. trois jours et mon stage touchera à sa fin. J'aurais passé près de 5 mois
						dans les locaux magnifiques de onepoint (mais pas que !) et cette expérience fut, tout aussi
						intense qu'instructive. Qui dit fin de stage dit également rapport de stage et compte-rendu
						d'expérience. Quoi de mieux qu'un site en React pour illustrer un stage qui avait pour vocation
						de me faire découvrir ce monde ? Je vais donc me poser face à ce magnifique monument et
						commencer à coder !
					</p>

					<img src={rooftop} className='w-100 mt-2 mb-3' alt='Rooftop' />

					<blockquote>
						<p>
							Pour être en mesure de faire un bilan de mon stage il faut d’abord que j’aborde les
							différents <Link to='/timeline'>projets</Link> sur lesquels j’ai eu la chance de travailler
							que ce soit à onepoint ou ailleurs.
						</p>
					</blockquote>
				</div>
			</Col>
		);
	}
}
