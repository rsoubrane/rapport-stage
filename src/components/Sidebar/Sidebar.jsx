import React, { Component } from "react";

import { Row, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import profile from "../../assets/medias/profile.jpg";

export default class Sidebar extends Component {
	render() {
		return (
			<Nav vertical className='sidebar bg-white'>
				<NavItem className='d-none d-md-block align-items-center flex-grow-0 py-4 px-3 pl-md-4 mb-4 bg-light'>
					<Row className='sidebar-header media d-flex align-items-center justify-content-between'>
						<Col md='12' xl='5'>
							<Link to='/'>
								<img
									src={profile}
									alt='...'
									width='100'
									className='rounded-circle img-thumbnail shadow-sm text-center'
								/>
							</Link>
						</Col>

						<Col md='12' xl='7'>
							<div className='media-body'>
								<h4 className='m-0 py-2'>Romain Soubrane</h4>
								<p className='font-weight-light text-muted m-0'>Développeur web onepoint.</p>
							</div>
						</Col>
					</Row>
				</NavItem>

				<NavItem className='d-block'>
					<Row className='h-100 flex-column align-items-center justify-content-around text-uppercase text-center'>
						<Link to='/' className='text-white'>
							<h3>Home</h3>
						</Link>
						<Link to='/profile' className='text-white'>
							<h3>Profile</h3>
						</Link>
						<Link to='/enterprise' className='text-white'>
							<h3>Enterprise</h3>
						</Link>
						<Link to='/timeline' className='text-white'>
							<h3>Timeline</h3>
						</Link>
						<Link to='/review' className='text-white'>
							<h3>Review</h3>
						</Link>
					</Row>
				</NavItem>
			</Nav>
		);
	}
}
