import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout'
import Seo from '../components/seo'
import TextWithFormatting from '../components/TextWithFormatting';

const WorkPage = ({ pageContext, data }) => {
	// const { localizations } = node;
	// const languageId = pageContext.intl.language === 'en' ? node.strapi_id : node.localizations.data[0].id;
	// const languageId = 5;
  

	// console.log(pageContext.intl.language);
	// console.log(pageContext);
	console.log(data.strapiWork);

	return (
	  <Layout>

		<section className="section">
			<div className="container">


			<div className="one-work-hero" style={data.strapiWork.Hero ? { background: `url(/static${data.strapiWork.Hero.url})` } : {}}>
				<div className="row align-items-center text-center">
						<div className="col-md-8 offset-md-2">
							<h1>{data.strapiWork.Title}</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-9 offset-md-3">
						<div className="d-flex flex-column gradient-text text-lg">
							<p className="">Where innovation meets possibility. Join&nbsp;us&nbsp;as&nbsp;we&nbsp;embark on a remarkable journey to&nbsp;create something extraordinary.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-3 d-none-mobile">
						<h5 className="sub-title">About project</h5>
					</div>
					<div className="col-sm-6 col-md-4 order-md-last">
						<div className="services-content-right services-content d-flex flex-column">
							<h5 className="sub-title d-block-mobile">About project</h5>
							<h2>Haut & Haar is</h2>
							<p>Doesn’t matter which kind of website you have landing page, online-store, corporate website or even saas platform. Because we have a plan to do. </p>
							<p><b>Different projects, one plan to solve.</b></p>
						</div>
					</div>
					<div className="col-sm-6 col-md-5">
						<div className="project-img">
							{/* <img src={`/static${node.TileImage.url}`} /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h5 className="sub-title sub-title-margin">Project screens</h5>
					</div>
					<div className="col-md-9">
						<div className="project-screens">
							<div className="screen">
								<img src="images/screen1.jpg" />
							</div>
							<div className="screen">
								<img src="images/screen2.jpg" />
							</div>
							<div className="screen">
								<img src="images/screen3.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h5 className="sub-title sub-title-margin">Project screens</h5>
					</div>
					<div className="col-md-9">
						<div className="project-screens">
							<div className="row screen-mobile">
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile1.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile2.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile3.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile4.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile5.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile6.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6 d-none-mobile">
									<div className="screen">
										<img src="images/mobile7.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile8.jpg" />
									</div>
								</div>
								<div className="col-sm-4 col-6">
									<div className="screen">
										<img src="images/mobile9.jpg" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section section-project">
			<div className="container">
				<div className="row flex-row-reverse">
					<div className="col-sm-6 col-md-4 align-items-center d-flex">
						<div className="projects-content">
							<h5>Next project</h5>
							<h2>Fluid app</h2>
							<div className="more">
								<a href="work-one.html">View project<i></i></a>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-8">
						<div className="projects-img">
							<a href="work-one.html"><img src="images/project.jpg" /></a>
						</div>
						<div className="more d-block-sm">
							<a href="work-one.html">Read more<i></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>








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
	  Hero {
		url
	  }
	  Info {
		data {
		  id
		  Info
		}
	  }
    }
  }
`;