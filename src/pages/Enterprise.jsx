import React, { Component } from "react";

import app from "../components/Firebase/app";

import { Container } from "reactstrap";

import Preloader from "../components/Preloader/Preloader";

import Header from "../components/Header/Header";
import EnterpriseList from "../components/Enterprise/EnterpriseList";
import ImageLeft from "../components/Enterprise/ImageLeft";
import ImageRight from "../components/Enterprise/ImageRight";

import onepoint1 from "../assets/medias/onepoint1.png";
import onepoint2 from "../assets/medias/onepoint2.png";
import onepoint3 from "../assets/medias/onepoint3.png";

export default class Enterprise extends Component {
	constructor(props) {
		super(props);

		this.state = {
			enterprise: []
		};
	}

	componentDidMount() {
		let data = app.database().ref("enterprise");
		data.on("value", snapshot => {
			let enterprise = snapshot.val();
			this.setState({ enterprise });
		});
	}

	render() {
		return (
			<div>
				<Header title='Onepoint' />

				{this.state.enterprise ? (
					<Container className='card-section timeline page-review mb-0'>
						<Container className='section-title mb-0 timeline-item bg-light rounded p-4 shadow'>
							{this.state.enterprise.text ? (
								<ImageRight picture={onepoint1} text={this.state.enterprise.text.text1} />
							) : null}

							<EnterpriseList
								title="Principaux secteurs d'activité de onepoint :"
								sectors={this.state.enterprise.sectors}
							/>

							{this.state.enterprise.text ? (
								<ImageLeft picture={onepoint2} text={this.state.enterprise.text.text2} />
							) : null}

							{this.state.enterprise.text ? (
								<ImageRight picture={onepoint3} text={this.state.enterprise.text.text3} />
							) : null}

							<EnterpriseList
								title='onepoint s’organise autour de 5 grandes valeurs :'
								valeurs={this.state.enterprise.valeurs}
							/>
						</Container>
					</Container>
				) : (
					<Preloader />
				)}
			</div>
		);
	}
}
