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

		
		{work.Images.map((node) => (
			<section className="section" key={node.id} >
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h5 className="sub-title sub-title-margin">{node.Title}</h5>
						</div>
						<div className="col-md-9">
							<div className="project-screens">
								<div className={`${node.Space === false ? 'space-none ' : ''}${node.Column !== 1 ? 'screen-mobile ' : ''}row`}>
									{node.Photo.map((nodePhoto, index) => (
										<div key={nodePhoto.id} className={`${node.hideMobileImage === (index + 1)? "d-none-mobile ": ""}${node.Column === 2 ? 'col-6' : ''}${node.Column === 1 ? 'col-12' : ''}${node.Column === 3 ? 'col-sm-4 col-6' : ''}`}>
											<div className={`screen`}>
												{nodePhoto.url ? (
													<img loading="lazy" src={`/static${nodePhoto.url}`} alt={'dd up'} />
												) : null}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		))}


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
										<img loading="lazy" src={`/static${work.worknext.TileImage.url}`} alt={'dd up'} />
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
	  worknext {
		Title
		slug
		TileImage {
			url
		}
	  }
	  Images {
		id
		Photo {
			url
			id
		}
        Title
        hideMobileImage
        Space
        Column
	  }
    }
  }
`;