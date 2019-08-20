import React, { Component } from "react";

export default class BlogSocials extends Component {
	render() {
		return (
			<div className='p-3'>
				<h4 className='font-italic'>Socials</h4>
				<ol className='list-unstyled'>
					<li>
						<a href='https://github.com/rsoubrane/' target='_blank'>
							GitHub
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/rsoubrane/' target='_blank'>
							LinkedIn
						</a>
					</li>
					<li>
						<a href='https://twitter.com/EpticRS' target='_blank'>
							Twitter
						</a>
					</li>
				</ol>
			</div>
		);
	}
}
