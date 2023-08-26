// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"

// Step 2: Define your component
const WorksPage = ({data}) => {
	const works = data.allStrapiWork.edges;
	console.log(works);
	return (
		<Layout>

			{works.map(({ node }) => (

				<section key={node.id} className="section section-project section-no-border">
					<div className="container">
						<div className="row flex-row-reverse">
							<div className="col-sm-6 col-md-5 col-lg-4 align-items-center d-flex">
								<div className="projects-content">
									<h2>{node.Title}</h2>
									{node.TileDescription.data.TileDescription}
									<div className="more">
										<a href="work-one.html">Read more<i></i></a>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-7 col-lg-8">
								<div className="projects-img">
									<img src={`http://127.0.0.1:1337${node.TileImage.url}`}  alt={`${node.TileImage.alternativeText}`} />
								</div>
								<div className="more d-block-sm">
									<a href="work-one.html">Read more<i></i></a>
								</div>
							</div>
						</div>
					</div>
				</section>
			))}




		</Layout>
	)
}

export const query = graphql`
query MyQuery {
	allStrapiWork {
		edges {
			node {
				Title
				id
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

// Step 3: Export your component
export default WorksPage