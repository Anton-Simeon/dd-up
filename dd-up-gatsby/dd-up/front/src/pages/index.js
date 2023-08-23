// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql } from "gatsby"


// Step 2: Define your component
const IndexPage = ({data}) => {

	const articleNodes = data.allStrapiArticle.nodes;
	console.log(articleNodes);


	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
        		alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        		src="../images/icon.png"
      		/>
		</Layout>
	)
}


export const query = graphql`
  query MyQuery {
    allStrapiArticle {
      nodes {
        id
        Title
		Content {
			data {
				Content
			}
		}
      }
    }
  }
`;

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage