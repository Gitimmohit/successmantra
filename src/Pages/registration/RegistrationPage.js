import React, { useState } from 'react';
import { FaUserGraduate, FaBook, FaCalendarAlt, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    parentPhone: '',
    address: '',
    selectedCourse: '',
    batchPreference: '',
    education: '',
    paymentMethod: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const courses = [
    {
      id: 'ssc-cgl',
      name: 'SSC CGL',
      duration: '6 Months',
      fee: '₹15,000',
      description: 'Comprehensive preparation for SSC Combined Graduate Level Examination'
    },
    {
      id: 'upsc',
      name: 'UPSC Civil Services',
      duration: '12 Months',
      fee: '₹35,000',
      description: 'Complete guidance for UPSC Prelims, Mains and Interview'
    },
    {
      id: 'jpsc',
      name: 'JPSC',
      duration: '8 Months',
      fee: '₹20,000',
      description: 'Specialized coaching for Jharkhand Public Service Commission exams'
    },
    {
      id: 'banking',
      name: 'Banking PO',
      duration: '4 Months',
      fee: '₹12,000',
      description: 'Targeted preparation for IBPS PO and other banking exams'
    }
  ];

  const batchOptions = [
    'Morning (7-10 AM)',
    'Afternoon (12-3 PM)',
    'Evening (5-8 PM)',
    'Weekend Special'
  ];

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!emailRegex.test(formData.email)) errors.email = 'Valid email is required';
    if (!phoneRegex.test(formData.phone)) errors.phone = 'Valid 10-digit phone number is required';
    if (!phoneRegex.test(formData.parentPhone)) errors.parentPhone = 'Valid 10-digit phone number is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.selectedCourse) errors.selectedCourse = 'Please select a course';
    if (!formData.batchPreference) errors.batchPreference = 'Please select batch preference';
    if (!formData.education.trim()) errors.education = 'Education details are required';
    if (!formData.paymentMethod) errors.paymentMethod = 'Please select payment method';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmitStatus({ submitting: true, success: false, error: false });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus({ submitting: false, success: true, error: false });
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        parentPhone: '',
        address: '',
        selectedCourse: '',
        batchPreference: '',
        education: '',
        paymentMethod: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setSubmitStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="registration-hero">
        <div className="hero-content">
          <h1>Register for Your Dream Course</h1>
          <p>Take the first step towards your career goals with our expert guidance</p>
        </div>
      </section>

      {/* Course Selection */}
      <section className="course-selection">
        <h2>Our Courses</h2>
        <div className="course-grid1">
          {courses.map(course => (
            <div 
              key={course.id}
              className={`course-card1 ${formData.selectedCourse === course.id ? 'selected' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, selectedCourse: course.id }))}
            >
              <h3>{course.name}</h3>
              <div className="course-details1">
                <p><FaCalendarAlt /> {course.duration}</p>
                <p><FaRupeeSign /> {course.fee}</p>
              </div>
              <p className="course-description1">{course.description}</p>
              {formData.selectedCourse === course.id && (
                <div className="selected-badge">
                  <FaCheckCircle /> Selected
                </div>
              )}
            </div>
          ))}
        </div>
        {formErrors.selectedCourse && (
          <p className="error-message">{formErrors.selectedCourse}</p>
        )}
      </section>

      {/* Registration Form */}
      <section className="registration-form-section">
        <div className="form-container">
          <h2>Registration Form</h2>
          
          {submitStatus.success && (
            <div className="form-alert success">
              <FaCheckCircle /> Registration successful! We'll contact you shortly.
            </div>
          )}
          
          {submitStatus.error && (
            <div className="form-alert error">
              <MdError /> Registration failed. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {formErrors.fullName && (
                <span className="error">{formErrors.fullName}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Mobile Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  maxLength="10"
                />
                {formErrors.phone && (
                  <span className="error">{formErrors.phone}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="parentPhone">Parent/Guardian Mobile Number*</label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                placeholder="Enter parent/guardian mobile number"
                maxLength="10"
              />
              {formErrors.parentPhone && (
                <span className="error">{formErrors.parentPhone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address*</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows="3"
              ></textarea>
              {formErrors.address && (
                <span className="error">{formErrors.address}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="batchPreference">Batch Preference*</label>
                <select
                  id="batchPreference"
                  name="batchPreference"
                  value={formData.batchPreference}
                  onChange={handleChange}
                >
                  <option value="">Select Batch</option>
                  {batchOptions.map((batch, index) => (
                    <option key={index} value={batch}>{batch}</option>
                  ))}
                </select>
                {formErrors.batchPreference && (
                  <span className="error">{formErrors.batchPreference}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="education">Education Qualification*</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="Enter your education details"
                />
                {formErrors.education && (
                  <span className="error">{formErrors.education}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Payment Method*</label>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                  />
                  <span>Online Payment</span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                  />
                  <span>Cash at Institute</span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="installment"
                    checked={formData.paymentMethod === 'installment'}
                    onChange={handleChange}
                  />
                  <span>Installment Plan</span>
                </label>
              </div>
              {formErrors.paymentMethod && (
                <span className="error">{formErrors.paymentMethod}</span>
              )}
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className="submit-btn"
                disabled={submitStatus.submitting}
              >
                {submitStatus.submitting ? 'Processing...' : 'Register Now'}
              </button>
              <p className="disclaimer">
                *By registering, you agree to our terms and conditions. We'll contact you for further admission procedures.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="benefits-section">
        <h2>Why Choose Our Institute?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaUserGraduate className="benefit-icon" />
            <h3>Experienced Faculty</h3>
            <p>Learn from former toppers and subject matter experts with 10+ years of teaching experience</p>
          </div>
          <div className="benefit-card">
            <FaBook className="benefit-icon" />
            <h3>Comprehensive Study Material</h3>
            <p>Get specially curated study materials, practice sets, and previous year papers</p>
          </div>
          <div className="benefit-card">
            <FaCalendarAlt className="benefit-icon" />
            <h3>Regular Mock Tests</h3>
            <p>Weekly test series with detailed performance analysis and improvement suggestions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;