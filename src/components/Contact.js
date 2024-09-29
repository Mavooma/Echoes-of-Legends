import React from "react";
import "./Contact.css"; // Import the CSS for styling the contact section

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">
          Feel free to reach out for collaborations or inquiries. You can
          contact us through the following platforms:
        </p>
        <ul className="contact-info">
          <li>
            Email:{" "}
            <a href="mailto:info@musiclegends.com">info@musiclegends.com</a>
          </li>
          <li>Phone: +123 456 7890</li>
          <li>
            Follow us on social media:
            <ul className="social-media">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
