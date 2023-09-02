import * as React from 'react'
import { graphql } from "gatsby";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useIntl} from "gatsby-plugin-intl"
import TextWithFormatting from '../components/TextWithFormatting';


const IndexPage = ({ data }) => {
    const intl = useIntl()
	const currentLanguage = intl.locale;
	const dataHome = data.strapiHome;

	return (
		<Layout>
			<section className="hero" style={dataHome.HeroImage ? { backgroundImage: `url(/static${dataHome.HeroImage.url})` } : {}}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-9 col-xl-8 offset-md-3">
							{dataHome.HeroText ? (
								<TextWithFormatting text={dataHome.HeroText.data.HeroText} />
							) : null}
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title sub-title-margin">{intl.formatMessage({ id: "index.our.works" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5 order-sm-last">
							<div className="img-out-works">
								<img loading="lazy" alt="DD up" src="/static/images/our-works.jpg"/>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 order-md-last">
							<h5 className="sub-title sub-title-margin d-block-mobile">{intl.formatMessage({ id: "index.our.works" })}</h5>
							<ul className="our-works-list">
								<li><Link to={`/${currentLanguage}/works/haut-and-haar`}>Haut & Haar</Link></li>
							</ul>
							<div className="more">
								<Link to={`/${currentLanguage}/works`}>{intl.formatMessage({ id: "index.all.projects" })}<i></i></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section bg-gray section-description">
				<div className="container">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-9">
							{dataHome.HeroDescription ? (
								<TextWithFormatting text={dataHome.HeroDescription.data.HeroDescription} />
							) : null}
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "index.why.we" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="content-why-we d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">Why we</h5>
									{dataHome.WhyWe ? (
										<TextWithFormatting text={dataHome.WhyWe.data.WhyWe} />
									) : null}
								</div>
								<div>
									{dataHome.WhyWeBottom ? (
										<TextWithFormatting text={dataHome.WhyWeBottom.data.WhyWeBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/why-we.jpg" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "index.what.we.do" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5 d-flex flex-column order-md-last what-we-do-content">
							<div className="mb-auto">
								<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "index.what.we.do" })}</h5>
								{dataHome.WhatWeDo ? (
									<TextWithFormatting text={dataHome.WhatWeDo.data.WhatWeDo} />
								) : null}
							</div>
							<div>
								<div className="row align-items-end">
									<div className="col-md-8">
										{dataHome.WhatWeDoBottom ? (
											<TextWithFormatting text={dataHome.WhatWeDoBottom.data.WhatWeDoBottom} />
										) : null}
									</div>
									<div className="col-md-4 d-none-mobile">
										<div className="img">
											<img loading="lazy" alt="DD up" src="/static/images/services-we-provide.jpg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/what-we-do.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query HomeQuery($language: String) {
		strapiHome(locale: {eq: $language}) {
			HeroImage {
				url
			}
			HeroText {
				data {
					HeroText
				}
			}
			HeroDescription {
				data {
					HeroDescription
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
			WhatWeDo {
				data {
					WhatWeDo
				}
			}
			WhatWeDoBottom {
				data {
					WhatWeDoBottom
				}
			}
		}
	}
`;


export const Head = () => <Seo title="" />
export default IndexPage