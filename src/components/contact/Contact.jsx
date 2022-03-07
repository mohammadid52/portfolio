import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { contact } from "../../constants";
import Wrapper from "../Wrapper";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cdp8z3l",
        "template_ow2fzyc",
        form.current,
        "YczZsvqkvX5CesCV7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Wrapper id="contact" header1="Get In Touch" header2="Contact Me">
      <div className="contact__options">
        {contact.map((c) => (
          <article key={c.id} className="contact__option">
            <c.Icon className="contact__option-icon" />
            <h4>{c.text}</h4>
            <h5>{c.value}</h5>
            <a href={c.href} target="_blank" rel="noreferrer">
              {c.buttonText}
            </a>
          </article>
        ))}
      </div>

      <form onSubmit={sendEmail} ref={form} action="">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
