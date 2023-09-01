import React from "react"
import { ModalProvider } from '../context/ModalContext';
import Header from "./header"
import Footer from "./footer"
import "../scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <ModalProvider>
        <Header />
        {children}
        <Footer />
      </ModalProvider>
    </>
  )
}

export default Layout