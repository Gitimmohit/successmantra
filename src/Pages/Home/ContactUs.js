import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {

//for animation
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("call");
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const [isQuickQuestionOpen, setIsQuickQuestionOpen] = useState(false);

  return (
    <section className="con-section">
      <div className="con-container">
        <h2 className="con-heading" data-aos="fade-up">Let's Connect for Your Success!</h2>
        <p className="con-tagline" data-aos="fade-up">Choose your preferred way to reach us</p>

        {/* Interactive Contact Tabs */}
        <div className="con-tabs" data-aos="fade-up">
          <button
            className={`con-tab ${activeTab === "call" ? "con-active" : ""}`}
            onClick={() => setActiveTab("call")}
          >
            <FaPhone /> Call
          </button>
          <button
            className={`con-tab ${activeTab === "email" ? "con-active" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            <FaEnvelope /> Email
          </button>
          <button
            className={`con-tab ${activeTab === "visit" ? "con-active" : ""}`}
            onClick={() => setActiveTab("visit")}
          >
            <FaMapMarkerAlt /> Visit
          </button>
        </div>

        {/* Dynamic Contact Content */}
        <div className="con-content">
          {activeTab === "call" && (
            <div className="con-call" data-aos="fade-up">
              <h3 className="con-subheading">Instant Connect</h3>
              <a href="tel:+918825114644" className="con-phone-link">
                +91 8825114644
              </a>
              <div className="con-whatsapp">
                <FaWhatsapp className="con-whatsapp-icon" />
                <a
                  href="https://wa.me/918825114644"
                  className="con-whatsapp-link"
                >
                  Message us on WhatsApp
                </a>
              </div>
              <p className="con-timing">Available 10AM-8PM, Monday-Saturday</p>
            </div>
          )}

          {activeTab === "email" && (
            <div className="con-email" data-aos="fade-up">
              <h3 className="con-subheading">Drop us a message</h3>
              <a
                href="mailto:contact@successcoaching.com"
                className="con-email-link"
              >
                successmantra@gmail.com
              </a>
              <p className="con-response">We reply within 6 working hours</p>
              <button
                className="con-email-button"
                onClick={() => setIsEmailFormOpen(!isEmailFormOpen)}
              >
                Quick Email Form{" "}
                <FaChevronDown
                  className={`con-chevron ${
                    isEmailFormOpen ? "con-rotate" : ""
                  }`}
                />
              </button>

              {isEmailFormOpen && (
                <form className="con-email-form">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="con-input"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="con-input"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="con-textarea"
                  ></textarea>
                  <button type="submit" className="con-submit">
                    Send Email
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "visit" && (
            <div className="con-visit" data-aos="fade-up">
              <h3 className="con-subheading">Visit our center</h3>
              <address className="con-address">
              Jamshedpur Adityapur Shere-E-Punjab Mishra Building
              </address>
              <div className="con-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.215572726504!2d85.33425031544106!3d23.34383750946498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1047e6d1f7d%3A0x1d9a7a7b9b8b9b8b!2sSuccess%20Coaching%20Center!5e0!3m2!1sen!2sin!4v1623345678901!5m2!1sen!2sin"
                  className="con-map"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <p className="con-visit-timing">
                <strong>Open:</strong> 8AM-6PM, Monday-Saturday
                <br />
                <strong>Closed:</strong> Sunday and Public Holidays
              </p>
            </div>
          )}
        </div>

        {/* Quick Inquiry Accordion */}
        <div className="con-accordion" data-aos="fade-up">
          <button
            className="con-accordion-header"
            onClick={() => setIsQuickQuestionOpen(!isQuickQuestionOpen)}
          >
            Have a quick question?{" "}
            <FaChevronDown
              className={`con-chevron ${
                isQuickQuestionOpen ? "con-rotate" : ""
              }`}
            />
          </button>
          {isQuickQuestionOpen && (
            <div className="con-accordion-content" data-aos="fade-up">
              <form className="con-quick-form">
                <div className="con-form-row">
                  <input
                    type="text"
                    placeholder="Name"
                    className="con-input"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="con-input"
                    required
                  />
                </div>
                <select className="con-select" required>
                  <option value="">Select Course</option>
                  <option value="UPSC">UPSC</option>
                  <option value="JPSC">JPSC</option>
                  <option value="BPSC">BPSC</option>
                  <option value="NTPC">NTPC</option>
                  <option value="ALP">ALP</option>
                  <option value="RPF">RPF</option>
                  <option value="GROUP-D">GROUP-D</option>
                  <option value="BANKING-PO">BANKING-PO</option>
                  <option value="JSSC">JSSC</option>
                  <option value="BSSC">BSSC</option>
                  <option value="OTHER">OTHER</option>
                </select>
                <button type="submit" className="con-submit">
                  Request Callback
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
