import "./Footer.scss";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
//   const toggleHome = () => {
//     scroll.scrollToTop();
//   };

  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-links-container">
            <div className="footer-links-wrapper">
              <div className="footer-link-items">
                <h1 className="footer-link-title">Home</h1>
                <div className="footer-link" to="/signin">
                  Our Company
                </div>
                <div className="footer-link" to="/signin">
                  Brand
                </div>
                <div className="footer-link" to="/signin">
                  Blog
                </div>
                <div className="footer-link" to="/signin">
                  Careers
                </div>
                <div className="footer-link" to="/signin">
                  Help
                </div>
              </div>

              <div className="footer-link-items">
                <h1 className="footer-link-title">Developers</h1>
                <div className="footer-link" to="/signin">
                  Forums
                </div>
                <div className="footer-link" to="/signin">
                  Projects
                </div>
                <div className="footer-link" to="/signin">
                  Open Source
                </div>
              </div>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-link-items">
                <h1 className="footer-link-title">Legal</h1>
                <div className="footer-link" to="/signin">
                  Terms and Conditions
                </div>
                <div className="footer-link" to="/signin">
                  Privacy Policy
                </div>
                <div className="footer-link" to="/signin">
                  Terms of Use
                </div>
              </div>
              <div className="footer-link-items">
                <h1 className="footer-link-title">Resources</h1>
                <div className="footer-link" to="/signin">
                  Learn Platform
                </div>
                <div className="footer-link" to="/signin">
                  Community
                </div>
                <div className="footer-link" to="/signin">
                  Documentation
                </div>
                <div className="footer-link" to="/signin">
                  FAQ
                </div>
                <div className="footer-link" to="/signin">
                  Services Status
                </div>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrapper">
              {/* <Link className="social-logo" to="/" onClick={toggleHome}>
                Home
              </Link> */}
              <small className="website-rights">
                Company @ {new Date().getFullYear()} All rights reserved
              </small>
              <div className="social-icons">
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
