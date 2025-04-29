import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";
import { MdError } from "react-icons/md";
import "./ContactPage.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ServerAddress from "../../constant/ServerAddress";



const ContactPage = () => {
  const [show_loader, setshow_loader] = useState(false);

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  // FAQ state management
  const [activeFaq, setActiveFaq] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //for the api connections
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    setshow_loader(true);

    try {
      const response = await axios.post(
        ServerAddress + "blog/contactUs/",
        {
          name: formData.name,
          email: formData.email,
          phone_number: formData.phone_number,
          course: formData.course,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success") {
        setStatus({ submitting: false, success: true, error: false });
        setshow_loader(false);

        toast.success("Message Send Successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

        // Optionally clear success status after a few seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      setshow_loader(false);
      toast.error("Something went wrong while submitting.", {
        position: "bottom-right",
      });
    }
  };

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.style.backgroundColor = "#f0f8ff";
        setTimeout(() => {
          element.style.backgroundColor = "transparent";
        }, 2000);
      }
    }
  }, [location]);

  // FAQ data
  const faqs = [
    {
      question: "What are the batch timings for JPSC preparation?",
      answer:
        "We offer multiple batches for JPSC preparation: Morning (7-10am), Afternoon (12-3pm), and Evening (5-8pm). You can choose the batch that suits your schedule.",
    },
    {
      question: "Do you provide study materials?",
      answer:
        "Yes, we provide comprehensive study materials covering all subjects, current affairs updates, and previous year question papers with solutions.",
    },
    {
      question: "What is the fee structure for SSC CGL coaching?",
      answer:
        "Our SSC CGL program fees vary based on the duration and type of course (regular/crash course). Please contact our office for detailed fee structure and payment options.",
    },
    {
      question: "Can I get a demo class before joining?",
      answer:
        "Absolutely! We offer free demo classes for all our courses. Contact us to schedule a demo session at your convenience.",
    },
  ];

  return (
    <>
      <ToastContainer />

      {show_loader ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "999",
          }}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <div className="loader-container">
            <ColorRing
              visible={true}
              height="160"
              width="160"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </div>
      ) : null}
      <div className="cn-contact-page">
        {/* Contact Hero Section */}
        <section className="cn-contact-hero">
          <div className="cn-hero-content">
            <h1>Get in Touch</h1>
            <p>
              We're here to help you with any questions about our courses and
              programs
            </p>
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="cn-contact-main">
          <div className="cn-contact-container">
            {/* Contact Info */}
            <div className="cn-contact-info">
              <div className="cn-info-card">
                <div className="cn-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="cn-info-content">
                  <h3>Our Location</h3>
                  <p>Jamshedpur Adityapur Shere-E-Punjab Mishra Building</p>
                </div>
              </div>

              <div className="cn-info-card">
                <div className="cn-info-icon">
                  <FaPhone />
                </div>
                <div className="cn-info-content">
                  <h3>Phone Number</h3>
                  <p>+91 8825114644</p>
                </div>
              </div>

              <div className="cn-info-card">
                <div className="cn-info-icon">
                  <FaEnvelope />
                </div>
                <div className="cn-info-content">
                  <h3>Email Address</h3>
                  <p>infosuccessmantraclasses@gmail.com</p>
                </div>
              </div>

              <div className="cn-info-card">
                <div className="cn-info-icon">
                  <FaClock />
                </div>
                <div className="cn-info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 9am - 2pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cn-contact-form" id="faq">
              <h2>Send Us a Message</h2>
              <p>
                Have questions about our courses? Fill out the form below and
                we'll get back to you within 24 hours.
              </p>

              {status.success && (
                <div className="cn-form-alert cn-success">
                  <FaCheckCircle /> Your message has been sent successfully!
                </div>
              )}

              {status.error && (
                <div className="cn-form-alert cn-error">
                  <MdError /> There was an error sending your message. Please
                  try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="cn-form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="cn-form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="cn-form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="cn-form-group">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Course Interested In</option>
                    <option value="JPSC">JPSC Preparation</option>
                    <option value="SSC">SSC CGL</option>
                    <option value="Banking">Banking Exams</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="cn-form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cn-submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="cn-map-section">
          <div className="cn-map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.041923179763!2d85.32399731428647!3d23.34349750994799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5e7c39%3A0x179a3d0f8a0e9b6c!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="cn-faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="cn-faq-container">
            {faqs.map((faq, index) => (
              <div
                className={`cn-faq-item ${
                  activeFaq === index ? "cn-active" : ""
                }`}
                key={index}
              >
                <button
                  className="cn-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`cn-faq-answer-${index}`}
                >
                  {faq.question}
                  <FaChevronDown
                    className={`cn-faq-icon ${
                      activeFaq === index ? "cn-active" : ""
                    }`}
                  />
                </button>
                <div
                  id={`cn-faq-answer-${index}`}
                  className="cn-faq-answer"
                  role="region"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
