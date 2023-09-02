import React from "react";
import { Link } from 'gatsby'
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl"
import Layout from '../components/layout'
import TextWithFormatting from '../components/TextWithFormatting';
import { Helmet } from "react-helmet";



const WorkPage = ({ data }) => {
	const intl = useIntl();
	const work = data.strapiWork;
	return (
		<>
		<Helmet>
		  <title>{work.Title} | DD up</title>
		</Helmet>
	  	<Layout>
				

		<section className="section section-no-border">
			<div className="container">
				<div className="one-work-hero" style={work.Hero ? { backgroundImage: `url(/static${work.Hero.url})` } : {}}>
					<div className="row align-items-center text-center">
						<div className="col-md-8 offset-md-2">
							<h1>{work.Title}</h1>
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
							{work.Info ? (
								<TextWithFormatting text={work.Info.data.Info} />
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-3 d-none-mobile">
						<h5 className="sub-title">{intl.formatMessage({ id: "work.about.project" })}</h5>
					</div>
					<div className="col-sm-6 col-md-4 order-md-last">
						<div className="services-content-right services-content d-flex flex-column">
							<h5 className="sub-title d-block-mobile">{intl.formatMessage({ id: "work.about.project" })}</h5>
							{work.AboutProject ? (
								<TextWithFormatting text={work.AboutProject.data.AboutProject} />
							) : null}
						</div>
					</div>
					<div className="col-sm-6 col-md-5">
						<div className="project-img">
							{work.AboutProjectImg ? (
								<img loading="lazy" src={`/static${work.AboutProjectImg.url}`} alt={work.Title || 'dd up'} />
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
		{work.desktopScreens ? (
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h5 className="sub-title sub-title-margin">{intl.formatMessage({ id: "work.project.screens" })}</h5>
						</div>
						<div className="col-md-9">
							<div className="project-screens">
								{work.desktopScreens.map((node) => (
									<div key={node.id} className="screen">
										{node.url ? (
												<img loading="lazy" src={`/static${node.url}`} alt={work.Title || 'dd up'} />
										) : null}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		) : null}

		{work.mobileScreens ? (
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h5 className="sub-title sub-title-margin">{intl.formatMessage({ id: "work.project.screens" })}</h5>
						</div>
						<div className="col-md-9">
							<div className="project-screens">
								<div className="row screen-mobile">
									{work.mobileScreens.map((node, index) => ( 
										<div key={node.id} className={`col-sm-4 col-6 ${(index + 1) === work.MobileScreenHide ? 'd-none-mobile' : ''}`}> 
											{node.url ? (
												<div className="screen">
													<img loading="lazy" src={`/static${node.url}`} alt={work.Title || 'dd up'} />
												</div>
											) : null}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : null}

		{work.worknext ? (
			<section className="section section-project">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-sm-6 col-md-4 align-items-center d-flex">
							<div className="projects-content">
								<h5>{intl.formatMessage({ id: "work.next.project" })}</h5>
								<h2>{work.worknext.Title}</h2>
								<div className="more">
									<Link to={`../${work.worknext.slug}`}>{intl.formatMessage({ id: "work.view.project" })}<i></i></Link>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-8">
							<div className="projects-img">
								{work.worknext.TileImage ? (
									<Link to={`../${work.worknext.slug}`}>
										<img loading="lazy" src={`/static${work.worknext.TileImage.url}`} alt={work.worknext.TileImage.alternativeText || 'dd up'} />
									</Link>
								) : null}
							</div>
							<div className="more d-block-sm">
								<Link to={`../${work.worknext.slug}`}>{intl.formatMessage({ id: "work.view.project" })}<i></i></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : null}


	  </Layout>
	  </>
	);
  };


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
	  AboutProjectImg {
		url
	  }
	  AboutProject {
		data {
		  id
		  AboutProject
		}
	  }
	  desktopScreens {
		id
		url
	  }
	  mobileScreens {
		id
		url
	  }
	  MobileScreenHide
	  worknext {
		Title
		slug
		TileImage {
			url
			alternativeText
		}
	  }
    }
  }
`;