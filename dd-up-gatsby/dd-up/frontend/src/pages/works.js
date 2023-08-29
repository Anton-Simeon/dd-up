import React from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import TextWithFormatting from '../components/TextWithFormatting';


const WorksPage = ({ data }) => {
	const intl = useIntl();
	const currentLanguage = intl.locale;

	const works = data.allStrapiWork.edges;

	return (
		<Layout>
			{works.map(({ node }, index) => (
				<section key={node.id} className={`section section-project ${index === 0 ? 'section-no-border' : ''}`}>
					<div className="container">
						<div className={`row ${index % 2 ? 'flex-row-reverse' : ''} `}>
							<div className="col-sm-6 col-md-5 col-lg-4 align-items-center d-flex">
								<div className="projects-content">
									<h2>{node.Title}</h2>
									{node.TileDescription ? (
										<TextWithFormatting text={node.TileDescription.data.TileDescription} />
									) : null}
									<div className="more">
										<Link to={node.slug}>Read more<i></i></Link>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-7 col-lg-8">
								<div className="projects-img">
									{node.TileImage ? (
										<Link to={node.slug}>
											<img loading="lazy" src={`/static${node.TileImage.url}`} alt={node.TileImage.alternativeText || 'dd up'} />
										</Link>
									) : null}
								</div>
								<div className="more d-block-sm">
									<Link to={node.slug}>Read more<i></i></Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
		</Layout>
	);
}

export const query = graphql`
	query MyQuery($language: String) {
		allStrapiWork(filter: {locale: {eq: $language}}, sort: {createdAt: DESC}) {
			edges {
				node {
					Title
					id
					slug
					TileImage {
						url
						alternativeText
					}
					TileDescription {
						data {
							TileDescription
						}
					}
				}
			}
		}
	}
`;

export const Head = () => (<Seo title="Works" />)

export default WorksPage;