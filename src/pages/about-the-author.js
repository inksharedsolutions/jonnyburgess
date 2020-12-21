import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Jonny Burgess</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | Jonny Burgess"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Jonny Burgess
					 				</span>
					 			</div>

					 			{/* <h4>
								 	To survive, they’ll need to traverse diffcult terrain, battle a grizzly bear, and get
									help from an unlikely friend – Snowbear.
					 			</h4> */}

					 			{/* <span className="ata-span-fx">author quote</span> */}
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
                                  Author Jonny Burgess got licensed to sell Aflac in November 2008, thinking a second source of income could supplement his struggling food business. With just weeks until his wedding, he needed to make a lot of money fast, so he invented a system and went to work. He became the company's best performer in the country, opening seventy-two accounts in eleven months, before being promoted to DSC. Now, he focuses on teaching others his fast-track system. In this guide-book, he offers advice to help other reps secure an immediate cash-flow with Aflac, create wealth, and secure their financial future, and work hard, but play even harder. Learn proven strategies that helped Jonny's agents to: get 6 M-0138's signed in a day, enroll 4 groups in a day, book 28 appointments in a day; all while cold-calling just one day a week!
								</p>

			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor