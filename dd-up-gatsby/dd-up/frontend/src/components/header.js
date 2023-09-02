import * as React from 'react'
import { Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl';
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useModal } from '../context/ModalContext';



const Header = ({headerClass}) => {
	const intl = useIntl();
	const currentLanguage = intl.locale;

	const { toggleModal } = useModal();

	console.log(headerClass);

	return (
		<header className={`header${headerClass ? " " : ""}${headerClass}`}>
			<div className="container">
				<Link to={`/${currentLanguage}`} className="logo">
					<img loading="lazy" src="/static/images/logo.svg" alt="dd up" />
				</Link>
				<div className='header-right'>
					<nav className="header-nav">
						<ul>
							<li><Link to={`/${currentLanguage}/about`} activeClassName="current">{intl.formatMessage({ id: "headerAbout" })}</Link></li>
							<li><Link to={`/${currentLanguage}/services`} activeClassName="current">{intl.formatMessage({ id: "headerServices" })}</Link></li>
							<li><Link to={`/${currentLanguage}/works`} activeClassName="current">{intl.formatMessage({ id: "headerWorks" })}</Link></li>
							<li><Link to={`/${currentLanguage}/contact`} activeClassName="current">{intl.formatMessage({ id: "headerContact" })}</Link></li>
						</ul>
					</nav>
					<LanguageSwitcher />
					<button type='button' className="header-nav-btn" onClick={toggleModal}>
						<div></div>
						<div></div>
						<div></div>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header