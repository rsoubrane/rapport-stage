import React, { Component } from "react";

import { Row, Col, Nav, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import profile from "../../assets/medias/profile.jpg";

export default class Sidebar extends Component {
	render() {
		return (
			<Nav vertical className='sidebar bg-white'>
				<Row className='m-0'>
					<Col xs='12' sm='6' md='12' className='p-0'>
						<div className='py-4 px-3 mb-4 bg-light'>
							<Row className='sidebar-header media d-flex align-items-center justify-content-center'>
								<Col md='12' xl='5'>
									<Link to={"/"}>
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
						</div>
					</Col>
					<Col xs='12' sm='6' md='12' className='p-0'>
						<Nav className='d-flex flex-column align-items-center justify-content-center text-uppercase'>
							<NavItem>
								<NavLink href='/profile' className='text-white'>
									<h3>Profile</h3>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/enterprise' className='text-white'>
									<h3>Enterprise</h3>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/timeline' className='text-white'>
									<h3>Timeline</h3>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/review' className='text-white'>
									<h3>Review</h3>
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</Nav>
		);
	}
}
