import * as React from 'react'
import { graphql } from "gatsby";
import { Link } from 'gatsby'
import { Helmet } from "react-helmet";
import { useIntl} from "gatsby-plugin-intl"
import Layout from '../components/layout'
import TextWithFormatting from '../components/TextWithFormatting';


const IndexPage = ({ data }) => {
    console.log(data)

	return (
		<>
			<Helmet>
				<title>DD up</title>
			</Helmet>
			<Layout headerClass="header-with-hero">
                sasdas
			</Layout>
		</>
	)
}


export const query = graphql`
	query HomeQuery($language: String) {
		allStrapiArticle(filter: {locale: {eq: $language}}) {
            edges {
                node {
                  testDynamic {
                    d4
                    d3
                    image {
                        url
                    }
                  }
                }
              }
		}
	}
`;


export default IndexPage