import React from "react"
import { ModalProvider } from '../context/ModalContext';
import Header from "./header"
import Footer from "./footer"
import "../scss/styles.scss"

const Layout = ({ children, headerClass = '' }) => {
  return (
    <>
      <ModalProvider>
        <Header headerClass={headerClass} />
        {children}
        <Footer />
      </ModalProvider>
    </>
  )
}

export default Layout