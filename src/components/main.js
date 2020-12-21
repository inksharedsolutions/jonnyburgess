import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/dummy-profile.jpg';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Jonny Burgess
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p style={{textAlign: "justify"}}>
                    Author Jonny Burgess got licensed to sell Aflac in November 2008, thinking a second source of income could supplement his struggling food business. With just weeks until his wedding, he needed to make a lot of money fast, so he invented a system and went to work. He became the company's best performer in the country, opening seventy-two accounts in eleven months, before being promoted to DSC.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
