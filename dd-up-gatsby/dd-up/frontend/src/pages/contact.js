import React from "react";
import { graphql } from "gatsby";
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout'
import Seo from '../components/seo'
import TextWithFormatting from '../components/TextWithFormatting';


const ServicesPage = ({ data }) => {
	const intl = useIntl()
	const dataContact = data.strapiContact;	

	return (
		<Layout>
			<section className="section section-about section-no-border">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-sm-6 col-md-5 col-lg-4 align-items-center d-flex">
							<div className="about-content">
								{dataContact.GetInTouch ? (
									<TextWithFormatting text={dataContact.GetInTouch.data.GetInTouch} />
								) : null}
							</div>
						</div>
						<div className="col-sm-6 col-md-7 col-lg-8">
							<div className="about-img">								
								<img loading="lazy" alt="DD up" src="/static/images/about.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-3 d-none-mobile">
							<h5 className="sub-title">{intl.formatMessage({ id: "contact.lets.talk" })}</h5>
						</div>
						<div className="col-sm-6 col-md-5">
							<div className="services-content d-flex flex-column">
								<div className="mb-auto">
									<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "contact.lets.talk" })}</h5>
									{dataContact.LetsTalk ? (
										<TextWithFormatting text={dataContact.LetsTalk.data.LetsTalk} />
									) : null}
								</div>
								<div>
									{dataContact.LetsTalkBottom ? (
										<TextWithFormatting text={dataContact.LetsTalkBottom.data.LetsTalkBottom} />
									) : null}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4">
							{/* <form className="contact-form">
								<div className="form-floating">
									<input type="text" className="form-control" id="name" placeholder="Name" />
									<label for="name">Name</label>
								</div>
								<div className="form-floating">
									<input type="text" className="form-control" id="compamy" placeholder="Company" />
									<label for="compamy">Company</label>
								</div>
								<div className="form-floating">
									<input type="text" className="form-control" id="email" placeholder="Email" />
									<label for="email">Email</label>
								</div>
								<div className="form-floating">
									<input type="text" className="form-control" id="project-name" placeholder="Project Name" />
									<label for="project-name">Project Name</label>
								</div>
								<div className="form-floating">
									<textarea className="form-control" placeholder="Description" id="description" style="height: 124px"></textarea>
									<label for="description">Description</label>
								</div>
								<div className="form-btn d-grid">
									<button type="submit" className="btn btn-primary btn-sm">SEND</button>
								</div>
							</form> */}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}


export const query = graphql`
	query ContactQuery($language: String) {
		strapiContact(locale: {eq: $language}) {
			GetInTouch {
				data {
					GetInTouch
				}
			}
			LetsTalk {
				data {
					LetsTalk
				}
			}
			LetsTalkBottom {
				data {
					LetsTalkBottom
				}
			}
		}
	}
`;


export const Head = () => (<Seo title="Contact" />)
export default ServicesPage