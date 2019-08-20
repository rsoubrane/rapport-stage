import React, { Component } from "react";

import { Row, Col } from "reactstrap";

export default class EnterpriseList extends Component {
	render() {
		return (
			<Row className='my-5 bg-light'>
				<Col className='pt-4' md={{ size: 8, offset: 2 }}>
					<h6 className='text-left text-uppercase'>
						<strong className='text-center'>{this.props.title}</strong>{" "}
					</h6>
					<div className='list1'>
						<ul className='list-unstyled py-2'>
							{this.props.sectors
								? this.props.sectors.map((item, key) => <li key={key}>{item}</li>)
								: null}
							{this.props.valeurs
								? this.props.valeurs.map((item, key) => <li key={key}>{item}</li>)
								: null}
						</ul>
					</div>
				</Col>
			</Row>
		);
	}
}
