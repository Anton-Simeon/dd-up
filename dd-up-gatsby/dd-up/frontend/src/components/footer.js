import React from "react";
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {


	return (
		<>
			<div className="section section-line">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-lg-3"></div>
						<div className="col-sm-8 col-lg-9"></div>
					</div>
				</div>
			</div>
			<section className="section section-what-about-you">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-lg-3">
							<h5 className="sub-title">What about you?</h5>
						</div>
						<div className="col-sm-8 col-lg-9">
							<p>Let’s talk!<br />Only one things left to discuss your project.<br />Tell us about your business.<br />So fill the form and see you soon!</p>
							<div className="wrap-btn">
								<Link to='/contact' className="btn btn-secondary">I want a Site</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-lg-3">
							<Link to='/' className="footer-logo">
								<StaticImage src="../images/logo.svg" imgStyle={{ transition: 'none', opacity: 1 }} alt="dd up" />
							</Link>
						</div>
						<div className="col-sm-8 col-lg-9 d-lg-flex justify-content-between">
							<div className="footer-text">
								Easy solutions for&nbsp;difficult&nbsp;tasks
							</div>
							<div>
								<nav className="footer-nav">
									<ul>
										<li><Link to="/">Home</Link></li>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/works">Works</Link></li>
										<li><Link to="/about">About</Link></li>
										<li><Link to="/contact">Contact</Link></li>
									</ul>
								</nav>	
								<div className="footer-contact">
									<a href="mailto:dd.up@gmail.com">dd.up@gmail.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">© DDup, 2022</div>
						<div className="col-sm-9">
							<ul>
								<li><Link to="impressum">Impressum</Link></li>
								<li><Link to="datenschutz">Datenschutz</Link></li>
								<li><Link to="cookies">Cookies</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer