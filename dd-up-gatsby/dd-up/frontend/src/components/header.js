import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<Link to="/" className="logo">
					<StaticImage src="../images/logo.svg" alt="dd up" />
				</Link>
				<div className="header-nav-btn">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="header-dropdown">
					<a href="" className="header-dropdown-title">ENG<i></i></a>
					<div className="header-dropdown-container">
						<ul>
							<li className="active"><a href="">ENG</a></li>
							<li><a href="">DE</a></li>
						</ul>
					</div>
				</div>
				<nav className="header-nav">
					<ul>
						<li><Link to="/" activeClassName="current">HOME</Link></li>
						<li><Link to="/about" activeClassName="current">ABOUT</Link></li>
						<li><Link to="/works" activeClassName="current">WORKS</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header