/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import "../../assets/styles/ProfileSocials.css";

export default class ProfileSocials extends Component {
	render() {
		return (
			<Row className='mt-4'>
				<Col sm='4' className='text-center'>
					<a
						href='https://www.linkedin.com/in/rsoubrane/'
						className='btn btn-lg btn-block btn-linkedin'
						data-toggle='tooltip'
						target='_blank'
						data-placement='top'
						title='LinkedIn'>
						<i className='fa fa-linkedin fa-2x' />
					</a>
				</Col>
				<Col sm='4' className='text-center'>
					<a
						href='https://github.com/rsoubrane/'
						className='btn btn-lg btn-block btn-github'
						data-toggle='tooltip'
						target='_blank'
						data-placement='top'
						title='GitHub'>
						<i className='fa fa-github fa-2x' />
					</a>
				</Col>
				<Col sm='4' className='text-center'>
					<a
						href='https://twitter.com/EpticRS'
						className='btn btn-lg btn-block btn-twitter'
						data-toggle='tooltip'
						target='_blank'
						data-placement='top'
						title='Twitter'>
						<i className='fa fa-twitter fa-2x' />
					</a>
				</Col>
			</Row>
		);
	}
}