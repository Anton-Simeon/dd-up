import * as React from 'react'
import Header from './header'
import Footer from './footer'
import "../scss/styles.scss"

const Layout = ({ pageTitle, children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout