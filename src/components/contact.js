import React, { Component } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";

class Contact extends Component {
  renderForm() {
    return (
      <form action="https://formspree.io/meqpjlqq" method="POST" className='contact-form'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />

        <label htmlFor="form-message">Note</label>
        <textarea id="form-message" name="message"></textarea>
        <div className='submit-group'>
        <button type="submit" name="submit" className='submit-btns'>
          Submit
        </button>

        <button type="reset" name="reset" className='submit-btns'>
          Reset
        </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="contact-group">
        <section className="contact-container">
          <h3 className="contact-title">Contact</h3>
          <h4 className="contact-title">nate.voisan@gmail.com</h4>
          {this.renderForm()}
        </section>
      </div>
    );
  }
}

export default Contact;
