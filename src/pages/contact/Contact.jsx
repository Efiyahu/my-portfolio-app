import React from 'react';
import './Contact.styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <div className="container">
        <div className="left">
          <form className="form">
            <h3 className="subtitle">Fill In</h3>
            <div className="name-email">
              <div className="name">
                <input id="name" name="name" />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="email">
                <input id="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="subject">
              <input id="subject" name="subject" />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="message" name="message">
              <textarea id="message" name="message" />
              <label htmlFor="message">Message</label>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
