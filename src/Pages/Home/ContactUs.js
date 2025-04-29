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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Col,
  Card,
  CardTitle,
  Form,
  CardBody,
  Row,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import ServerAddress from "../../constant/ServerAddress";
import { ColorRing } from "react-loader-spinner";

const ContactUs = () => {
  //for animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // for the loader
  const [loader, setloader] = useState(false);

  const [activeTab, setActiveTab] = useState("call");
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const [isQuickQuestionOpen, setIsQuickQuestionOpen] = useState(false);

  // for the message
  const [user_name, setuser_name] = useState("");
  const [user_name_err, setuser_name_err] = useState(false);
  const [user_mobile, setuser_mobile] = useState("");
  const [user_mobile_error, setuser_mobile_error] = useState(false);
  const [user_email, setuser_email] = useState("");
  const [user_email_error, setuser_email_error] = useState(false);
  const [user_message, setuser_message] = useState("");
  const [setuser_message_error, setsetuser_message_error] = useState(false);

  // for false the vaildations
  useEffect(() => {
    if (user_name !== "") {
      setuser_name_err(false);
    } else if (user_mobile !== "") {
      setuser_mobile_error(false);
    } else if (user_email !== "") {
      setuser_email_error(false);
    } else if (user_message !== "") {
      setsetuser_message_error(false);
    }
  }, [user_name, user_mobile, user_email, user_message]);

  // for the questions

  const [question_user_name, setquestion_user_name] = useState("");
  const [question_user_name_error, setquestion_user_name_error] =
    useState(false);

  const [question_user_phone, setquestion_user_phone] = useState("");
  const [question_phone_error, setquestion_phone_error] = useState(false);

  const [question_course_options, setquestion_course_options] = useState();
  const [question_course_options_phone, setquestion_course_options_phone] =
    useState(false);
  // for the validation
  useEffect(() => {
    if (question_user_name !== "") {
      setquestion_user_name_error(false);
    }
    if (question_user_phone !== "") {
      setquestion_phone_error(false);
    }
    if (question_course_options !== "") {
      setquestion_course_options_phone(false);
    }
  }, [question_user_name, question_user_phone, question_course_options]);

  const quickmail = () => {
    setloader(true);
    axios
      .post(ServerAddress + "blog/addmessage/", {
        name: user_name,
        email:user_email,
        phone:user_mobile,
        message:user_message,
      })
      .then(function (response) {
        if (response.data) {
          setloader(false);
          setuser_name("")
          setuser_email("")
          setuser_mobile("")
          setuser_message("")
          toast.success(`Email Send Successfully `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
        }
      })
      .catch((error) => {      
        setloader(false);
        toast.error(`Error Occurs white send Email`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      });
  };


  const QuickQuestions = () => {
    setloader(true);
    axios
      .post(ServerAddress + "blog/questions/", {
        name: question_user_name,
        phone:question_user_phone,
        course:question_course_options,
      })
      .then(function (response) {
        if (response.data) {
          setloader(false);
          setuser_name("")
          setuser_email("")
          setuser_mobile("")
          setuser_message("")
          toast.success(`Email Send Successfully `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
          });
        }
      })
      .catch((error) => {      
        setloader(false);
        toast.error(`Error Occurs white send Email`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      {/* loader for avoid multipule click */}
      {loader ? (
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
      <section className="con-section">
        <div className="con-container">
          <h2 className="con-heading" data-aos="fade-up">
            Let's Connect for Your Success!
          </h2>
          <p className="con-tagline" data-aos="fade-up">
            Choose your preferred way to reach us
          </p>

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
                <p className="con-timing">
                  Available 10AM-8PM, Monday-Saturday
                </p>
              </div>
            )}

            {activeTab === "email" && (
              <div className="con-email" data-aos="fade-up">
                <h3 className="con-subheading">Drop us a message</h3>
                <a
                  href="mailto:contact@successcoaching.com"
                  className="con-email-link"
                >
                  infosuccessmantraclasses@gmail.com
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
                    <Row>
                      <Col lg={4} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            value={user_name}
                            onChange={(e) => {
                              setuser_name(e.target.value);
                            }}
                            type="text"
                            placeholder="Your Name"
                            className="con-input"
                            style={{ borderColor: user_name_err ? "red" : "" }}
                          />
                          {user_name_err && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Enter Mobile Number
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            type="text"
                            value={user_mobile}
                            onChange={(e) => {
                              setuser_mobile(e.target.value);
                            }}
                            maxLength={10}
                            pattern="\d*"
                            placeholder="Your Mobile Number"
                            className="con-input"
                            style={{
                              borderColor: user_mobile_error ? "red" : "",
                            }}
                          />
                          {user_mobile_error && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Enter Mobile Number
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            value={user_email}
                            onChange={(e) => {
                              setuser_email(e.target.value);
                            }}
                            type="email"
                            placeholder="Your Email"
                            className="con-input"
                            style={{
                              borderColor: user_email_error ? "red" : "",
                            }}
                          />
                          {user_email_error && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Enter Valid Mail
                            </span>
                          )}
                        </div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <textarea
                            value={user_message}
                            onChange={(e) => {
                              setuser_message(e.target.value);
                            }}
                            placeholder="Your Message"
                            className="con-textarea"
                            style={{
                              borderColor: setuser_message_error ? "red" : "",
                            }}
                          ></textarea>
                          {setuser_message_error && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Enter Your Message
                            </span>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <button
                      type="submit"
                      className="con-submit"
                      onClick={(e) => {
                        if (user_name === "") {
                          setuser_name_err(true);
                        } else if (user_mobile === "") {
                          setuser_mobile_error(true);
                        } else if (user_email === "") {
                          setuser_email_error(true);
                        } else if (user_message === "") {
                          setsetuser_message_error(true);
                        } else {
                          quickmail()
                        }
                      }}
                    >
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
                    <Row style={{ width: "100%" }}>
                      {/* Name Field */}
                      <Col lg={6} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            type="text"
                            placeholder="Name"
                            className="con-input"
                            value={question_user_name}
                            onChange={(e) => {
                              setquestion_user_name(e.target.value);
                              setquestion_user_name_error(false); // reset error
                            }}
                            style={{
                              borderColor: question_user_name_error
                                ? "red"
                                : "",
                            }}
                            required
                          />
                          {question_user_name_error && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Please enter your name
                            </span>
                          )}
                        </div>
                      </Col>

                      {/* Phone Field */}
                      <Col lg={6} md={6} sm={6}>
                        <div style={{ marginBottom: "10px" }}>
                          <input
                            type="tel"
                            placeholder="Phone"
                            className="con-input"
                            value={question_user_phone}
                            maxLength={10}
                            style={{
                              borderColor: question_phone_error ? "red" : "",
                            }}
                            onChange={(e) => {
                              setquestion_user_phone(e.target.value);
                              setquestion_phone_error(false); // reset error
                            }}
                            required
                          />
                          {question_phone_error && (
                            <span style={{ color: "red", fontSize: "11px" }}>
                              Please enter a valid phone number
                            </span>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <select
                      className="con-select"
                      value={question_course_options}
                      style={{
                        borderColor: question_course_options_phone ? "red" : "",
                      }}
                      onChange={(e) => {
                        setquestion_course_options(e.target.value);
                        setquestion_course_options_phone(false); // reset error
                      }}
                      required
                    >
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

                    {question_course_options_phone && (
                      <span style={{ color: "red", fontSize: "11px" }}>
                        Please select a course
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="con-submit"
                    onClick={() => {
                      if (question_user_name === "") {
                        setquestion_user_name_error(true);
                      } else if (question_user_phone === "") {
                        setquestion_phone_error(true);
                      } else if (
                        question_course_options === "" ||
                        question_course_options === undefined
                      ) {
                        setquestion_course_options_phone(true);
                      } else {
                        QuickQuestions();
                      }
                    }}
                  >
                    Request Callback
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
