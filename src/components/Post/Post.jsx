import React, { Component } from "react";

import { Col, Card } from "reactstrap";
import { Link } from "react-router-dom";

export default class Post extends Component {
	render() {
		return (
			<Col md='6' className='pl-0 '>
				<Card className='mb-4 box-shadow'>
					<img
						className='card-img-right flex-auto d-none d-lg-block'
						alt='Thumbnail'
						style={{ width: "100%", height: "225px", display: "block" }}
						src={this.props.picture}
					/>
					<div className='card-body'>
						<h4 className='mb-2'>
							<Link className='text-primary' to={this.props.redirection}>
								{this.props.title}
							</Link>
						</h4>
						<p className='card-text mb-auto'>{this.props.description}</p>
						<div className='d-flex justify-content-between align-items-center'>
							<small className='text-muted'>
								August 20, by <Link to='/profile'>Romain</Link>
							</small>
						</div>
					</div>
				</Card>
			</Col>
		);
	}
}
