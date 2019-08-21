import React, { Component } from "react";

export default class EnterpriseHeader extends Component {
	render() {
		return (
			<div className='position-relative overflow-hidden w-100 text-center bg-light'>
				<div className='col-md-8 mx-auto my-5'>
					<h1 className='display-4 font-weight-normal'>Onepoint</h1>
					<p className='lead font-weight-normal'>
						Onepoint est une entreprise française spécialisée dans la transformation numérique des
						entreprises et organisations.
					</p>
				</div>
				<div className='product-device box-shadow d-none d-md-block' />
				<div className='product-device product-device-2 box-shadow d-none d-md-block' />
			</div>
		);
	}
}
