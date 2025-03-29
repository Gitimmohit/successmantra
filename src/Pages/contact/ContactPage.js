import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import './ContactPage.css';

const ContactPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  // FAQ state management
  const [activeFaq, setActiveFaq] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ submitting: false, success: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  // Toggle FAQ items
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What are the batch timings for JPSC preparation?",
      answer: "We offer multiple batches for JPSC preparation: Morning (7-10am), Afternoon (12-3pm), and Evening (5-8pm). You can choose the batch that suits your schedule."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials covering all subjects, current affairs updates, and previous year question papers with solutions."
    },
    {
      question: "What is the fee structure for SSC CGL coaching?",
      answer: "Our SSC CGL program fees vary based on the duration and type of course (regular/crash course). Please contact our office for detailed fee structure and payment options."
    },
    {
      question: "Can I get a demo class before joining?",
      answer: "Absolutely! We offer free demo classes for all our courses. Contact us to schedule a demo session at your convenience."
    }
  ];

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help you with any questions about our courses and programs</p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Education Street, Ranchi, Jharkhand - 834001</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>+91 98765 43210</p>
                <p>+91 12345 67890</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>info@yourcoaching.com</p>
                <p>support@yourcoaching.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 9am - 2pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <p>Have questions about our courses? Fill out the form below and we'll get back to you within 24 hours.</p>
            
            {status.success && (
              <div className="form-alert success">
                <FaCheckCircle /> Your message has been sent successfully!
              </div>
            )}
            
            {status.error && (
              <div className="form-alert error">
                <MdError /> There was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
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
              
              <div className="form-group">
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
                className="submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : (
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
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.041923179763!2d85.32399731428647!3d23.34349750994799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5e7c39%3A0x179a3d0f8a0e9b6c!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <FaChevronDown className={`faq-icon ${activeFaq === index ? 'active' : ''}`} />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;