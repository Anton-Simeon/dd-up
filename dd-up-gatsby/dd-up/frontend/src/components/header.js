import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useIntl } from 'gatsby-plugin-intl';



const Header = () => {
	const intl = useIntl();
	const currentLanguage = intl.locale;
	return (
		<header className="header">
			<div className="container">
				<Link to={`/${currentLanguage}`} className="logo">
					<StaticImage src="../images/logo.svg" imgStyle={{ transition: 'none', opacity: 1 }} alt="dd up" />
				</Link>
				<div className="header-nav-btn">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<LanguageSwitcher />
				<nav className="header-nav">
					<ul>
						<li><Link to={`/${currentLanguage}`} activeClassName="current">HOME</Link></li>
						<li><Link to={`/${currentLanguage}/about`} activeClassName="current">ABOUT</Link></li>
						<li><Link to={`/${currentLanguage}/works`} activeClassName="current">WORKS</Link></li>
					</ul>
				</nav>
			</div>
			      <h1>{intl.formatMessage({ id: 'hello' })}</h1>
		</header>
	)
}

export default Header