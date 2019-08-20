import React, { Component } from "react";

import { Row, Col } from "reactstrap";

export default class ImageLeft extends Component {
	render() {
		return (
			<Row className='my-3 justify-content-center align-items-center'>
				<Col xl='6' className=''>
					<img src={this.props.picture} className='img-fluid' alt='1' />
				</Col>
				<Col xl='6' className='mx-0 px-3'>
					<div className='my-3'>
						<p className='lead text-justify'>{this.props.text}</p>
					</div>
				</Col>
			</Row>
		);
	}
}
