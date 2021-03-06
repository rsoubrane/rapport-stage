import React, { Component } from "react";

import Carrousel from "../Carrousel/Carrousel";

export default class TimelineItem extends Component {
	render() {
		return (
			<main>
				<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
					<div className='timeline-arrow' />
					<h2 className='h4 mb-0 text-primary'>{this.props.title}</h2>
					<span className='small text-gray'>
						<i className='fa fa-clock-o mr-1' />
						{this.props.date}
					</span>
					<p className='text-small mt-2 font-weight-light'>{this.props.paragraph1}</p>

					{this.props.images ? <Carrousel images={this.props.images} /> : null}

					<p className='text-small mt-2 font-weight-light'>{this.props.paragraph2}</p>

					{this.props.points ? (
						<ul>
							{this.props.points ? this.props.points.map((item, key) => <li key={key}>{item}</li>) : null}
						</ul>
					) : null}

					<div>
						{this.props.missions ? <p className='card-text mt-2 mb-1'>Missions :</p> : null}
						<ul>
							{this.props.missions
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
