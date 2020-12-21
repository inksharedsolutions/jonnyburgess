import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book1-min.png'
import Book2 from '../assets/img/books/book2-min.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'jonny-burgess',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Jonny Burgess</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Books</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Books | Jonny Burgess" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="you-can-too" alt="main-book" src={Book} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										 <h1>You Can Too</h1>
									 	<p>How an Aflac Rookie Built the Business in a Year</p>
								    </div>

									<p>
                                    An Aflac sales legend shares a fast-track system that enabled him to become the company's #1 account opener during his rookie year. 
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/You-Can-Too-Jonny-Burgess-ebook/dp/B08FPFPZ6N/ref=sr_1_1?dchild=1&keywords=9781648951350&qid=1597777875&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/you-can-too-jonny-burgess/1106465630?ean=9781648951350">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/You-Can-Too-Rookie-Business/dp/1648951341/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597777890&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/you-can-too-jonny-burgess/1128802957?ean=9781648951343">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Can-Too/Jonny-Burgess/9781648951343?id=8081927231397">Books A Million</a></li>
								</nav>
							</div>
						</div>



						<div className="columns">
						
						<div className="column">
							<div className="bookImgContainer">
								<img id="snowbear" alt="main-book" src={Book2} />
							</div>
						</div>
						
						<div className="column">
							<section className="contentBook">

								<div className="title-wrapper">
									 <h1>You Still Can Too</h1>
									 <p>Take Your Aflac Career to a Whole New Level!</p>
								</div>

								<p>
                                    - 72 New Accounts first year as a Rookie Associate (#1 in the US)<br />
                                    - 241 New Accounts in a year as a DSC (#1 in the US)
								</p>
								
								<p>
                                    The Top Account Opener in the country, (now an RSC), will now show you how to:<br /><br />
                                    - Open Even More Accounts<br />
                                    - Accomplish Your Life Goals<br />
                                    - Position Your Business as an 'Agency'<br />
                                    - Protect Your Existing Accounts From Take-overs<br />
                                    - Generate Multiple Streams of Income<br />
                                    - Build a $1,000,000 Net Worth<br />
								</p>

							</section>

							<nav className="booklinkBlocks">
								<span>Ebook :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/You-Still-Can-Jonny-Burgess-ebook/dp/B08FPGJ4M5/ref=sr_1_1?dchild=1&keywords=9781648951374&qid=1597777931&sr=8-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-still-can-too-take-your-aflac-career-to-a-whole-new-level/">Stratton Press</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/you-still-can-too-jonny-burgess/1137465242?ean=9781648951374">Barnes & Noble</a></li>
							</nav>

							<nav className="booklinkBlocks">
								<span>Paperback :</span>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/You-Still-Can-Too-Career/dp/1648951368/ref=sr_1_1?dchild=1&keywords=9781648951367&qid=1597777958&sr=8-1">Amazon</a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/you-still-can-too-jonny-burgess/1129787325?ean=9781648951367">Barnes & Noble </a></li>
								<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Still-Can-Too/Jonny-Burgess/9781648951367?id=8081927231397">Books A Million</a></li>
							</nav>
						</div>
					</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor