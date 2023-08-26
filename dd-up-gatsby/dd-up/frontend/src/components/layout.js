import React from "react"
import { LanguageProvider } from "./LanguageContext"
import IntlProviderWrapper from "./IntlProviderWrapper";
import Header from "./header"
import Footer from "./footer"
import "../scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
    <IntlProviderWrapper>
      <Header />
      {children}
      <Footer />
      
      </IntlProviderWrapper>
    </LanguageProvider>
  )
}

export default Layout