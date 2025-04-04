import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToHelp = () => {
    navigate("/contact#faq"); 
  };
  return (
    <footer className="universal-footer">
      {/* Wave Decoration */}
      <div className="footer-wave"></div>
      
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to get tips and updates for your exam preparation</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>
              <RiSendPlaneFill className="send-icon" />
            </button>
          </div>
         
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Top Courses</h4>
            <ul>
              <li>UPSC</li>
              <li>JPSC</li>
              <li>BPSC</li>
              <li>SSC</li>
              <li>Railway</li>
              <li>Banking</li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Resources</h4>
            <ul>
              <li>Study Materials</li>
              <li>Mock Tests</li>
              <li>PYQ Solutions</li>
              <li>Doubt Solving</li>
              <li>Topper Sheets</li>
            </ul>
          </div>
         
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <h4>Get in Touch</h4>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91 8825114644</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>succesmanta@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Jamshedpur Adityapur Shere-E-Punjab Mishra Building </span>
          </div>
          
          <div className="social-links">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        {/* <div className="footer-logo">PW</div> */}
        <div className="legal-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
          <span>© {new Date().getFullYear()} Succes Manta. All rights reserved.</span>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <div className="chat-button" onClick={goToHelp}>
        <div className="pulse-effect"></div>
        <span>Need Help?</span>
      </div>
    </footer>
  );
};

export default Footer;