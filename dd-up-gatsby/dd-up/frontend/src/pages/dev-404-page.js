import * as React from "react"
import { Link } from "gatsby"
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout'


const NotFoundPage = () => {
	const intl = useIntl();
	const currentLanguage = intl.locale;
  return (
		<Layout>
      <section className="section section-404">
        <div className="container">
          <h4>Page not found</h4>
          <p>
            Sorry 😔, we couldn’t find what you were looking for.
            <Link to={`/${currentLanguage}`}>Go home</Link>.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
