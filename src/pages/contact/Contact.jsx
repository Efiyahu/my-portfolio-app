import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import './Contact.styles.scss';
import contactImage from '../../assets/contact.jpg';
import { ThemeContext } from '../../context/ThemeContext';

function Contact() {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`contact ${dark ? 'dark' : 'light'}`}>
      <h1 className="title" style={{ cursor: 'default' }}>
        Contact Me
      </h1>
      <div className="container">
        <div className="left">
          <form className="form">
            <h3 className="subtitle" style={{ cursor: 'default' }}>
              Fill In
            </h3>
            <div className="name-email">
              <Input
                className={`name-email-input ${dark ? 'dark' : 'light'}`}
                name="name"
                title="Full Name"
                placeholder="Full Name"
              />
              <Input
                className={`name-email-input ${dark ? 'dark' : 'light'}`}
                name="email"
                title="Email"
                placeholder="Email"
              />
            </div>
            <div className="subject">
              <Input
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
                  className={`form-textarea ${dark ? 'dark' : 'light'}`}
                  id="message"
                  name="message"
                />
                <label htmlFor="message" className="label" htmlFor="message">
                  Message
                </label>
              </div>
            </div>
            <button className="btn-form" type="submit">
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
