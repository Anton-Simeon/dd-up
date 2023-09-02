import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"
import Layout from '../components/layout'
import Seo from '../components/seo'
import TextWithFormatting from '../components/TextWithFormatting';


const ServicesPage = ({ data }) => {
	const intl = useIntl()
	const dataServices = data.strapiService;	
	return (
		<Layout>
			<section className="hero" style={dataServices.Hero ? { backgroundImage: `url(/static${dataServices.Hero.url})` } : {}}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-8 offset-md-3">
							{dataServices.DesignDevelopment ? (
								<TextWithFormatting text={dataServices.DesignDevelopment.data.DesignDevelopment} />
							) : null}
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "services.we.do.websites.and.apps" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "services.we.do.websites.and.apps" })}</h5>
									{dataServices.WebsitesApp ? (
										<TextWithFormatting text={dataServices.WebsitesApp.data.WebsitesApp} />
									) : null}
								</div>
								<div>
									{dataServices.WebsitesAppBottom ? (
										<TextWithFormatting text={dataServices.WebsitesAppBottom.data.WebsitesAppBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/content-services1.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "services.design.services" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "services.design.services" })}</h5>
									{dataServices.DesignServices ? (
										<TextWithFormatting text={dataServices.DesignServices.data.DesignServices} />
									) : null}
								</div>
								<div>
									{dataServices.DesignServicesBottom ? (
										<TextWithFormatting text={dataServices.DesignServicesBottom.data.DesignServicesBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/content-services2.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "services.development" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "services.development" })}</h5>
									{dataServices.Development ? (
										<TextWithFormatting text={dataServices.Development.data.Development} />
									) : null}
								</div>
								<div>
									{dataServices.DevelopmentBottom ? (
										<TextWithFormatting text={dataServices.DevelopmentBottom.data.DevelopmentBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/content-services3.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "services.marketing" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "services.marketing" })}</h5>
									{dataServices.Marketing ? (
										<TextWithFormatting text={dataServices.Marketing.data.Marketing} />
									) : null}
								</div>
								<div>
									{dataServices.MarketingBottom ? (
										<TextWithFormatting text={dataServices.MarketingBottom.data.MarketingBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							<div className="img">
								<img loading="lazy" alt="DD up" src="/static/images/content-services4.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}


export const query = graphql`
	query ServiceQuery($language: String) {
		strapiService(locale: {eq: $language}) {
			Hero {
				url
			}
			DesignDevelopment {
				data {
					DesignDevelopment
				}
			}
			DesignServices {
				data {
					DesignServices
				}
			}
			DesignServicesBottom {
				data {
					DesignServicesBottom
				}
			}
			Development {
				data {
					Development
				}
			}
			DevelopmentBottom {
				data {
					DevelopmentBottom
				}
			}
			Marketing {
				data {
					Marketing
				}
			}
			MarketingBottom {
				data {
					MarketingBottom
				}
			}
			WebsitesApp {
				data {
					WebsitesApp
				}
			}
			WebsitesAppBottom {
				data {
					WebsitesAppBottom
				}
			}
		}
	}
`;


export const Head = () => (<Seo title="Services" />)
export default ServicesPage