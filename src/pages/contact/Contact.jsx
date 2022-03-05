import React, { useContext, useState } from 'react';
import Input from '../../components/input/Input';
import './Contact.styles.scss';
import contactImage from '../../assets/contact.jpg';
import { ThemeContext } from '../../context/ThemeContext';
import emailjs from '@emailjs/browser';

function Contact() {
  const [inputs, setInputs] = useState({
    to_name: 'Efraim Alkhazov',
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { dark } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4izpe3d',
      'template_dcwwdjy',
      inputs,
      'YOUOT2P4onQOM8QUb'
    );
    setInputs({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: [e.target.value],
    }));
  };

  return (
    <div className={`contact ${dark ? 'dark' : 'light'}`}>
      <h1 className="title" style={{ cursor: 'default' }}>
        Contact Me
      </h1>
      <div className="container">
        <div className="left">
          <form onSubmit={handleSubmit} className="form">
            <h3 className="subtitle" style={{ cursor: 'default' }}>
              Fill In
            </h3>
            <div className="name-email">
              <Input
                onChange={handleChange}
                value={inputs.name}
                className={`name-email-input ${dark ? 'dark' : 'light'}`}
                name="name"
                title="Name"
                placeholder="Name"
              />
              <Input
                onChange={handleChange}
                value={inputs.email}
                className={`name-email-input ${dark ? 'dark' : 'light'}`}
                name="email"
                title="Email"
                placeholder="Email"
              />
            </div>
            <div className="subject">
              <Input
                onChange={handleChange}
                value={inputs.subject}
                className={`subject-input ${dark ? 'dark' : 'light'}`}
                name="subject"
                title="Subject"
                placeholder="Subject"
              />
            </div>
            <div className="message" name="message">
              <div
                className="textarea-container"
                style={{ position: 'relative', height: '100%' }}
              >
                <textarea
                  onChange={handleChange}
                  value={inputs.message}
                  className={`form-textarea ${dark ? 'dark' : 'light'}`}
                  id="message"
                  name="message"
                />
                <label htmlFor="message" className="label">
                  Message
                </label>
              </div>
            </div>
            <button
              className={`btn-form ${dark ? 'dark-form' : 'light-form'}`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="right">
          <div className="contact-image-container">
            <img className="contact-image" src={contactImage} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
