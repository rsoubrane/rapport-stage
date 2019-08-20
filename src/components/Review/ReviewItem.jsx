import React, { Component } from "react";

import { Col } from "reactstrap";

export default class ReviewItem extends Component {
	render() {
		return (
			<Col>
				<ul className='timeline'>
					<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
						<div className='timeline-arrow' />
						<h2 className='h4 mb-0 text-primary'>
							{this.props.title} - {this.props.enterprise}
						</h2>
						<span className='small text-gray'>
							<i className='fa fa-clock-o mr-1' />
							{this.props.date}
						</span>

						<div className='my-3'>
							<h6 className='text-left text-uppercase'>
								<strong>Compétences acquises :</strong>{" "}
							</h6>
							<div className='list1'>
								<ul className='list-unstyled py-2'>
									{this.props.competences
										? this.props.competences.map((item, key) => <li key={key}>{item}</li>)
										: null}
								</ul>
							</div>
						</div>

						<div className='my-3'>
							<h6 className='text-left text-uppercase'>
								<strong>Ce que j’ai apporté au projet : </strong>{" "}
							</h6>
							<div className='list1'>
								<ul className='list-unstyled py-2'>
									{this.props.apport
										? this.props.apport.map((item, key) => <li key={key}>{item}</li>)
										: null}
								</ul>
							</div>
						</div>

						<div className='my-3'>
							<h6 className='text-left text-uppercase'>
								<strong>Ce que j’ai appris sur moi-même :</strong>{" "}
							</h6>
							<div className='list1'>
								<ul className='list-unstyled py-2'>
									{this.props.apprentissage
										? this.props.apprentissage.map((item, key) => <li key={key}>{item}</li>)
										: null}
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</Col>
		);
	}
}
