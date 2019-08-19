import React, { Component } from "react";

import { Link } from "react-router-dom";

import Carrousel from "../Carrousel/Carrousel";
import "../../assets/styles/Carrousel.css";

export default class TimelineItem extends Component {
	render() {
		console.log(this.props.languages);

		return (
			<main>
				<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
					<div className='timeline-arrow' />
					<Link to={this.props.redirection}>
						<h2 className='h5 mb-0'>{this.props.title}</h2>
					</Link>
					<span className='small text-gray'>
						<i className='fa fa-clock-o mr-1' />
						{this.props.date}
					</span>
					<p className='text-small mt-2 font-weight-light'>{this.props.paragraph1}</p>

					{this.props.images ? <Carrousel images={this.props.images} /> : null}

					<p className='text-small mt-2 font-weight-light'>{this.props.paragraph2}</p>
					<div>
						{this.props.languages ? <p className='card-text mt-2 mb-1'>Missions :</p> : null}
						<ul>
							{this.props.languages
								? this.props.missions.map((item, key) => <li key={key}>{item}</li>)
								: null}
						</ul>

						{this.props.languages
							? this.props.languages.map((item, key) => (
									<span key={key} className='badge badge-primary mt-3 mr-3'>
										{item}
									</span>
							  ))
							: null}
					</div>
				</li>
			</main>
		);
	}
}
