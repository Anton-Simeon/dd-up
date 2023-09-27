import React, { useState } from 'react';
import axios from 'axios';
import { graphql } from "gatsby";
import { useIntl } from 'gatsby-plugin-intl';
import { Helmet } from "react-helmet";
import Layout from '../components/layout'
import TextWithFormatting from '../components/TextWithFormatting';


const ContactPage = ({ data }) => {
	const intl = useIntl()
	const dataContact = data.strapiContact;	


  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    project_name: '',
    description: '',
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/form.php', formData) // Замените '/api/contact' на URL вашего сервера для обработки формы
      .then((response) => {
        console.log('Form data sent successfully:', response.data);
		
		// Функция для отображения блока и его автоматического скрытия через 5 секунд
		function showSentEmail() {
			const sentEmail = document.getElementById('sent-email');
			sentEmail.style.display = 'block'; // Показать блок
	
			// Запустить таймер для скрытия блока через 5 секунд
			setTimeout(function () {
			sentEmail.style.display = 'none'; // Скрыть блок
			}, 5000); // 5000 миллисекунд (5 секунд)
		}
		// Вызвать функцию, чтобы показать блок
		showSentEmail();

        // Дополнительная обработка успешной отправки
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        // Обработка ошибки отправки
      });
  };

	return (
		<>
			<Helmet>
				<title>Contact | DD up</title>
			</Helmet>
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
									<img loading="lazy" alt="DD up" height="460" width="759" src="/static/images/about.jpg"/>
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
								<form className="contact-form" onSubmit={handleSubmit}>
									<div className="form-floating">
										<input type="text" required className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} />
										<label htmlFor="name">Имя</label>
									</div>
									<div className="form-floating">
										<input type="text" className="form-control" id="compamy" name="compamy" placeholder="Company" onChange={handleChange} />
										<label htmlFor="compamy">Company</label>
									</div>
									<div className="form-floating">
										<input type="email" required className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange} />
										<label htmlFor="email">Email</label>
									</div>
									<div className="form-floating">
										<input type="text" required className="form-control" id="project_name" name="project_name" placeholder="Project Name" onChange={handleChange} />
										<label htmlFor="project-name">Project Name</label>
									</div>
									<div className="form-floating">
										<textarea required className="form-control" placeholder="Description" id="description" name="description" onChange={handleChange}></textarea>
										<label htmlFor="description">Description</label>
									</div>
									<div className="form-btn d-grid">
										<button type="submit" className="btn btn-primary btn-sm">SEND</button>
									</div>
									<div className='sent-email' id="sent-email">
										<div>
											<p>{intl.formatMessage({ id: "contact.thankyouser" })} {formData.name},</p>
											<p>{intl.formatMessage({ id: "contact.thankyou" })}</p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
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


export default ContactPage