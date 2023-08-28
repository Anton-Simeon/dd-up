import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout'
import Seo from '../components/seo'

const WorkPage = ({ pageContext, data }) => {
	// const { localizations } = node;
	// const languageId = pageContext.intl.language === 'en' ? node.strapi_id : node.localizations.data[0].id;
	// const languageId = 5;
  

	// console.log(pageContext.intl.language);
	console.log(pageContext);
	console.log(data.strapiWork.Title);

	return (
	  <Layout>
		<div>
		  <p>{data.strapiWork.Title}</p>
		</div>
	  </Layout>
	);
  };

export const Head = () => (<Seo title="Work" />);
export default WorkPage;

export const query = graphql`
  query($slug: String, $language: String) {
    strapiWork(
      slug: {
        eq: $slug
      },
      locale: {
        eq: $language
      }
    ) {
      id
      Title
      locale
      strapi_id
    }
  }
`;