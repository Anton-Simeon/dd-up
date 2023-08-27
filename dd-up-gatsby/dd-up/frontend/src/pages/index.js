// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { useIntl} from "gatsby-plugin-intl"


// Step 2: Define your component
const IndexPage = () => {
    const intl = useIntl()



	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial. index </p>

            {intl.formatMessage({ id: "hello" })}

			<StaticImage
        		alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        		src="../images/icon.png"
      		/>
		</Layout>
	)
}



// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage