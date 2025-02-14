import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Styles/contact.css";

const Contact = () => {
  return (

  
    <div className="contact-container">
 
      <div className="contact-me">
       <h1>Get In Touch</h1>

        <div className="contact-info">
          <div className="follow-us">
            <h3>Follow Us</h3><br/>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faXTwitter} /> Twitter X
            </a>
          </div>
          <div className="contact-us">
            <h3>Contact</h3><br/>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Mail:
              <a href="mailto:your@mail.com"> your@mail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +1 (123) 456-7890
            </p>
          </div>
          <div className="address">
            <h3>Address</h3><br/>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Address: Dhok Muhammad
              Khan Near Airport Chaklala, Rawalpindi
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
