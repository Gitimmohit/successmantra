import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaBook,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdError } from "react-icons/md";
import "./RegistrationPage.css";
import ServerAddress from "../../constant/ServerAddress";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [show_loader, setshow_loader] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    parentPhone: "",
    address: "",
    selectedCourse: "",
    batchPreference: "",
    education: "",
    paymentMethod: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });
  const [activeTab, setActiveTab] = useState("form");
  const [showAllCourses, setShowAllCourses] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const courses = [
    {
      id: "ssc-cgl",
      name: "SSC CGL",
      duration: "6 Months",
      fee: "₹15,000",
      description:
        "Comprehensive preparation for SSC Combined Graduate Level Examination",
    },
    {
      id: "upsc",
      name: "UPSC Civil Services",
      duration: "12 Months",
      fee: "₹35,000",
      description: "Complete guidance for UPSC Prelims, Mains and Interview",
    },
    {
      id: "jpsc",
      name: "JPSC",
      duration: "8 Months",
      fee: "₹20,000",
      description:
        "Specialized coaching for Jharkhand Public Service Commission exams",
    },
  ];

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 3);

  const batchOptions = [
    "Morning (7-10 AM)",
    "Afternoon (12-3 PM)",
    "Evening (5-8 PM)",
    "Weekend Special",
  ];

  const paymentMethods = [
    { id: "online", label: "Online Payment" },
    { id: "cash", label: "Cash at Institute" },
    { id: "installment", label: "Installment Plan" },
  ];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.parentPhone.trim()) {
      errors.parentPhone = "Parent/Guardian phone is required";
    } else if (!validatePhone(formData.parentPhone)) {
      errors.parentPhone = "Valid 10-digit phone number is required";
    }
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.selectedCourse) errors.selectedCourse = "Please select a course";
    if (!formData.batchPreference) errors.batchPreference = "Please select batch preference";
    if (!formData.education.trim()) errors.education = "Education details are required";
    if (!formData.paymentMethod) errors.paymentMethod = "Please select payment method";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when field is not empty
    if (value.trim() !== "" && formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Special validation for email and phone fields
    if (name === "email" && value.trim() && !validateEmail(value)) {
      setFormErrors(prev => ({ ...prev, email: "Valid email is required" }));
    } else if ((name === "phone" || name === "parentPhone") && value.trim() && !validatePhone(value)) {
      setFormErrors(prev => ({ ...prev, [name]: "Valid 10-digit phone number is required" }));
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setshow_loader(true);
    setSubmitStatus({ submitting: true, success: false, error: false });

    try {
      const response = await axios.post(
        ServerAddress + "blog/contactUs/",
        {
          name: formData.fullName,
          email: formData.email,
          phone_number: formData.phone,
          guardian_number: formData.parentPhone,
          address: formData.address,
          batch_pref: formData.batchPreference,
          qualification: formData.education,
          payment_mode: formData.paymentMethod,
          course: formData.selectedCourse,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success" || response.status === 201) {
        setSubmitStatus({ submitting: false, success: true, error: false });
        setshow_loader(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          parentPhone: "",
          address: "",
          selectedCourse: "",
          batchPreference: "",
          education: "",
          paymentMethod: "",
        });
        toast.success("Registration Successfully Submited", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });

        setTimeout(() => {
          setSubmitStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        toast.warning("Error Occurs While Registration Process", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      toast.error("Error Occurs While Registration Process", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      setSubmitStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleViewAllCourses = () => {
    navigate("/course");
  };

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
      <div className="reg-page">
        {/* Hero Section */}
        <section className="reg-hero">
          <div className="reg-hero-content">
            <h1>Register for Your Dream Course</h1>
            <p>
              Take the first step towards your career goals with our expert
              guidance
            </p>
            <div className="reg-hero-buttons" id="reg">
              <button
                className={`reg-hero-btn ${
                  activeTab === "form" ? "reg-active-tab" : ""
                }`}
                onClick={() => setActiveTab("form")}
              >
                Registration Form
              </button>
              <button
                className={`reg-hero-btn ${
                  activeTab === "courses" ? "reg-active-tab" : ""
                }`}
                onClick={() => setActiveTab("courses")}
              >
                Our Courses
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="reg-main-content">
          {/* Registration Form - Always shown on desktop, conditionally on mobile */}
          <section
            className={`reg-form-section ${
              activeTab === "form" ? "reg-active-section" : ""
            }`}
          >
            <div className="reg-form-container">
              <h2>Registration Form</h2>

              {submitStatus.success && (
                <div className="reg-form-alert reg-success">
                  <FaCheckCircle /> Registration successful! We'll contact you
                  shortly.
                </div>
              )}

              {submitStatus.error && (
                <div className="reg-form-alert reg-error">
                  <MdError /> Registration failed. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="reg-form">
                <div className="reg-form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`reg-input ${
                      formErrors.fullName ? "reg-input-error" : ""
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="reg-error">{formErrors.fullName}</span>
                  )}
                </div>

                <div className="reg-form-row">
                  <div className="reg-form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`reg-input ${
                        formErrors.email ? "reg-input-error" : ""
                      }`}
                    />
                    {formErrors.email && (
                      <span className="reg-error">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="reg-form-group">
                    <label htmlFor="phone">Mobile Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      maxLength="10"
                      className={`reg-input ${
                        formErrors.phone ? "reg-input-error" : ""
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="reg-error">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="reg-form-group">
                  <label htmlFor="parentPhone">
                    Parent/Guardian Mobile Number*
                  </label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="Enter parent/guardian mobile number"
                    maxLength="10"
                    className={`reg-input ${
                      formErrors.parentPhone ? "reg-input-error" : ""
                    }`}
                  />
                  {formErrors.parentPhone && (
                    <span className="reg-error">{formErrors.parentPhone}</span>
                  )}
                </div>

                <div className="reg-form-group">
                  <label htmlFor="address">Address*</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                    rows="3"
                    className={`reg-textarea ${
                      formErrors.address ? "reg-input-error" : ""
                    }`}
                  ></textarea>
                  {formErrors.address && (
                    <span className="reg-error">{formErrors.address}</span>
                  )}
                </div>

                <div className="reg-form-row">
                  <div className="reg-form-group">
                    <label htmlFor="batchPreference">Batch Preference*</label>
                    <select
                      id="batchPreference"
                      name="batchPreference"
                      value={formData.batchPreference}
                      onChange={handleChange}
                      className={`reg-select ${
                        formErrors.batchPreference ? "reg-input-error" : ""
                      }`}
                    >
                      <option value="">Select Batch</option>
                      {batchOptions.map((batch, index) => (
                        <option key={index} value={batch}>
                          {batch}
                        </option>
                      ))}
                    </select>
                    {formErrors.batchPreference && (
                      <span className="reg-error">
                        {formErrors.batchPreference}
                      </span>
                    )}
                  </div>

                  <div className="reg-form-group">
                    <label htmlFor="education">Education Qualification*</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Enter your education details"
                      className={`reg-input ${
                        formErrors.education ? "reg-input-error" : ""
                      }`}
                    />
                    {formErrors.education && (
                      <span className="reg-error">{formErrors.education}</span>
                    )}
                  </div>
                </div>

                <div className="reg-form-group">
                  <label>Payment Method*</label>
                  <div className="reg-payment-options">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className="reg-payment-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handleChange}
                          className="reg-radio"
                        />
                        <span>{method.label}</span>
                      </label>
                    ))}
                  </div>
                  {formErrors.paymentMethod && (
                    <span className="reg-error">
                      {formErrors.paymentMethod}
                    </span>
                  )}
                </div>

                {formData.selectedCourse && (
                  <div className="reg-selected-course-info">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      Selected Course:
                    </h4>

                    <select
                      value={formData.selectedCourse}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          selectedCourse: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-200 cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a course...
                      </option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="reg-form-footer">
                  <button
                    type="submit"
                    className="reg-submit-btn"
                    disabled={submitStatus.submitting}
                  >
                    {submitStatus.submitting ? (
                      <>
                        <span className="reg-spinner"></span> Processing...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </button>
                  <p className="reg-disclaimer">
                    *By registering, you agree to our terms and conditions.
                    We'll contact you for further admission procedures.
                  </p>
                </div>
              </form>
            </div>
          </section>

          {/* Course Selection - Always shown on desktop */}
          <section
            className={`reg-course-selection ${
              activeTab === "courses" ? "reg-active-section" : ""
            }`}
          >
            <div className="reg-course-container">
              <h2 className="reg-section-title">Our Courses</h2>
              <div className="reg-course-grid">
                {visibleCourses.map((course) => (
                  <div
                    key={course.id}
                    className={`reg-course-card ${
                      formData.selectedCourse === course.id
                        ? "reg-selected"
                        : ""
                    }`}
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        selectedCourse: course.id,
                      }));
                      setActiveTab("form");
                    }}
                  >
                    <h3>{course.name}</h3>
                    <div className="reg-course-details">
                      <p>
                        <FaCalendarAlt /> {course.duration}
                      </p>
                      <p>
                        <FaRupeeSign /> {course.fee}
                      </p>
                    </div>
                    <p className="reg-course-description">
                      {course.description}
                    </p>
                    {formData.selectedCourse === course.id && (
                      <div className="reg-selected-badge">
                        <FaCheckCircle /> Selected
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {!showAllCourses && courses.length > 1 && (
                <button
                  className="reg-view-all-btn"
                  onClick={handleViewAllCourses}
                >
                  View All Courses <FaArrowRight />
                </button>
              )}
              {formErrors.selectedCourse && (
                <p className="reg-error-message">{formErrors.selectedCourse}</p>
              )}
            </div>
          </section>
        </main>

        {/* Why Choose Us */}
        <section className="reg-benefits-section">
          <div className="reg-benefits-container">
            <h2>Why Choose Our Institute?</h2>
            <div className="reg-benefits-grid">
              <div className="reg-benefit-card">
                <div className="reg-benefit-icon-container">
                  <FaUserGraduate className="reg-benefit-icon" />
                </div>
                <h3>Experienced Faculty</h3>
                <p>
                  Learn from former toppers and subject matter experts with 10+
                  years of teaching experience
                </p>
              </div>
              <div className="reg-benefit-card">
                <div className="reg-benefit-icon-container">
                  <FaBook className="reg-benefit-icon" />
                </div>
                <h3>Comprehensive Study Material</h3>
                <p>
                  Get specially curated study materials, practice sets, and
                  previous year papers
                </p>
              </div>
              <div className="reg-benefit-card">
                <div className="reg-benefit-icon-container">
                  <FaCalendarAlt className="reg-benefit-icon" />
                </div>
                <h3>Regular Mock Tests</h3>
                <p>
                  Weekly test series with detailed performance analysis and
                  improvement suggestions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="reg-contact-info">
          <div className="reg-contact-container">
            <div className="reg-contact-card">
              <FaPhone className="reg-contact-icon" />
              <h3>Call Us</h3>
              <p>+91 9876543210</p>
              <p>Available 8AM-8PM, Monday-Saturday</p>
            </div>
            <div className="reg-contact-card">
              <FaEnvelope className="reg-contact-icon" />
              <h3>Email Us</h3>
              <p>contact@successcoaching.com</p>
              <p>Response within 24 hours</p>
            </div>
            <div className="reg-contact-card">
              <FaMapMarkerAlt className="reg-contact-icon" />
              <h3>Visit Us</h3>
              <p>123 Success Road, Academic District</p>
              <p>Ranchi, Jharkhand - 834001</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegistrationPage;