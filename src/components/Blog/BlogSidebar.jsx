import React, { Component } from "react";

import { Link } from "react-router-dom";

import BlogSocials from "./BlogSocials";

export default class BlogSidebar extends Component {
	render() {
		return (
			<aside className='col-md-4 blog-sidebar'>
				<div className='p-3 mb-3 bg-light rounded'>
					<h4 className='font-italic'>About</h4>
					<p className='mb-0 text-justify'>
						Romain est un élève de l'École Supérieure du Digital qui devait réaliser un stage en immersion
						professionnelle pour une durée comprise entre 4 et 6 mois. Ce site au format reportage fait
						office de rapport de stage !
					</p>
					<p className='mb-0'>
						<Link to='/timeline'>En lire plus...</Link>
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

				<BlogSocials />
			</aside>
		);
	}
}
