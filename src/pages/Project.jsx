import React, { Component } from "react";

import { Container } from "reactstrap";

import Header from "../components/Header/Header";

import "../assets/styles/Timeline.css";
export default class Project extends Component {
	render() {
		return (
			<main>
				<Header title={"Projects"} />

				<Container>
					<ul className='timeline'>
						<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
							<div className='timeline-arrow' />
							<h2 className='h5 mb-0'>Title of section 1</h2>
							<span className='small text-gray'>
								<i className='fa fa-clock-o mr-1' />
								21 March, 2019
							</span>
							<p className='text-small mt-2 font-weight-light'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
								nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
								sagittis ligula in sodales vehicula....
							</p>
						</li>
						<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
							<div className='timeline-arrow' />
							<h2 className='h5 mb-0'>Title of section 2</h2>
							<span className='small text-gray'>
								<i className='fa fa-clock-o mr-1' />5 April, 2019
							</span>
							<p className='text-small mt-2 font-weight-light'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
								nisi semper.
							</p>
							<p className='text-small mt-2 font-weight-light'>
								Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto
								recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.
							</p>
						</li>
						<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
							<div className='timeline-arrow' />
							<h2 className='h5 mb-0'>Title of section 3</h2>
							<span className='small text-gray'>
								<i className='fa fa-clock-o mr-1' />
								18 August, 2019
							</span>
							<p className='text-small mt-2 font-weight-light'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
								nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
								sagittis ligula in sodales vehicula....
							</p>
						</li>
						<li className='timeline-item bg-white rounded ml-3 p-4 shadow'>
							<div className='timeline-arrow' />
							<h2 className='h5 mb-0'>Title of section 4</h2>
							<span className='small text-gray'>
								<i className='fa fa-clock-o mr-1' />
								10 October, 2019
							</span>
							<p className='text-small mt-2 font-weight-light'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non
								nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis
								sagittis ligula in sodales vehicula....
							</p>
							<p className='text-small mt-2 font-weight-light'>
								Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis
								illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum
								molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
							</p>
						</li>
					</ul>
				</Container>
			</main>
		);
	}
}
