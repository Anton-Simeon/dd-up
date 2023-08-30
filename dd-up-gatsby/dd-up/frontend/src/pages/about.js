import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import TextWithFormatting from '../components/TextWithFormatting';


const AboutPage = ({ data }) => {
	const dataAbout = data.allStrapiAbout.nodes[0];	
	console.log(data);
	return (
		<Layout>
			<section className="section section-about section-no-border">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-sm-6 col-md-5 col-lg-4 align-items-center d-flex">
							<div className="about-content">
								<h5>Our Studio</h5>
								{dataAbout.OurStudio ? (
									<TextWithFormatting text={dataAbout.OurStudio.data.OurStudio} />
								) : null}
							</div>
						</div>
						<div className="col-sm-6 col-md-7 col-lg-8">
							<div className="about-img">
								<StaticImage
        							alt="DD up"
									src="../images/about.jpg"
									placeholder="none"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12 d-none-mobile">
							<h5 className="sub-title">Why we</h5>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">Why we</h5>
									{dataAbout.WhyWe ? (
										<TextWithFormatting text={dataAbout.WhyWe.data.WhyWe} />
									) : null}
								</div>
								<div>
									{dataAbout.WhyWeBottom ? (
										<TextWithFormatting text={dataAbout.WhyWeBottom.data.WhyWeBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="img">
								<StaticImage
        							alt="DD up"
									src="../images/about1.jpg"
									placeholder="none"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h5 className="sub-title">Our team</h5>
						</div>
						<div className="col-md-9">
							<div className="team">
								<div className="row">
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/olha.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Olha A.</h6>
											<p>CEO</p>
										</div>
									</div>
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/volodymyr.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Volodymyr A.</h6>
											<p>team-leader, full-stack developer</p>
										</div>
									</div>
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/volodymyr.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Volodymyr A.</h6>
											<p>CEO, team-leader</p>
										</div>
									</div>
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/volodymyr.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Volodymyr A.</h6>
											<p>CEO, team-leader</p>
										</div>
									</div>
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/volodymyr.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Volodymyr A.</h6>
											<p>CEO, team-leader</p>
										</div>
									</div>
									<div className="col-sm-4 col-6">
										<div className="card-team">
											<div className="card-team-img">
												<StaticImage
													alt="DD up"
													src="../images/volodymyr.jpg"
													placeholder="none"
													imgStyle={{ transition: 'none', opacity: 1 }}
												/>
											</div>
											<h6>Volodymyr A.</h6>
											<p>CEO, team-leader</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12">
							<h5 className="sub-title">Why we</h5>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									{dataAbout.Studio ? (
										<TextWithFormatting text={dataAbout.Studio.data.Studio} />
									) : null}
								</div>
								<div>
									{dataAbout.StudioBottom ? (
										<TextWithFormatting text={dataAbout.StudioBottom.data.StudioBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 padding-left-sm-0">
							<div className="img">
								<StaticImage
									alt="DD up"
									src="../images/about2.jpg"
									placeholder="none"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}


export const query = graphql`
	query AboutQuery($language: String) {
		allStrapiAbout(filter: {locale: {eq: $language}}) {
			nodes {
				Studio {
					data {
						Studio
					}
				}
				OurStudio {
					data {
						OurStudio
					}
				}
				StudioBottom {
					data {
						StudioBottom
					}
				}
				WhyWe {
					data {
						WhyWe
					}
				}
				WhyWeBottom {
					data {
						WhyWeBottom
					}
				}
			}
		}
	}
`;


export const Head = () => (<Seo title="About" />)
export default AboutPage