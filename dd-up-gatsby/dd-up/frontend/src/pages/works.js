// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const WorksPage = () => {
	return (
		<Layout>
			<section class="section section-project section-no-border">
				<div class="container">
					<div class="row flex-row-reverse">
						<div class="col-sm-6 col-md-5 col-lg-4 align-items-center d-flex">
							<div class="projects-content">
								<h2>Project Name</h2>
								<p>Shirt projects description.<br/>
								This is e-commerce internet store or I’m not sure but here is some text.</p>
								<div class="more">
									<a href="work-one.html">Read more<i></i></a>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-md-7 col-lg-8">
							<div class="projects-img">
								<a href="work-one.html"><StaticImage src="../images/project.jpg" /></a>
							</div>
							<div class="more d-block-sm">
								<a href="work-one.html">Read more<i></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
export const Head = () => (<Seo title="Works" />)

// Step 3: Export your component
export default WorksPage