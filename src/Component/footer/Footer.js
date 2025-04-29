import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import ServerAddress from "../../constant/ServerAddress";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [show_loader, setshow_loader] = useState(false);
  const [show_toster, setshow_toster] = useState("");
  useEffect(() => {
    if (show_toster === "Successfully") {
      subsdone();
    } else if (show_toster === "Already") {
      Allreadysubs();
    }
  }, [show_toster]);

  const Allreadysubs = () =>
    toast("Already Subscribed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });

  const subsdone = () =>
    toast("Subscribed Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });

  const notify = () =>
    toast("Oop's enter a valid email!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });

  const Subscribe = async () => {
    setshow_loader(true);
    setshow_toster("");
    axios
      .post(
        ServerAddress + "blog/subscribe/",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.message === "Subscribed Successfully") {
          setshow_loader(false);
          setemail("");
          setshow_toster("Successfully");
        } else if (response.data.message === "Already Subscribed") {
          setshow_loader(false);
          setemail("");
          setshow_toster("Already");
        } else {
          setshow_loader(false);
          setshow_toster("");
          console.log("Failed to send message. Please try again.");
        }
      })
      .catch((error, response) => {
        setshow_toster("");
        setshow_loader(false);
        console.warn(`Error occurred: ${error}`);
      });
  };

  const goToHelp = () => {
    navigate("/contact#faq");
  };
  return (
    <footer className="universal-footer">
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Wave Decoration */}
      <div className="footer-wave"></div>

      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to get tips and updates for your exam preparation</p>
          <div className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Your email address"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (email === "") {
                  notify();
                } else {
                  Subscribe();
                }
              }}
            >
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
            <span>infosuccessmantraclasses@gmail.com</span>
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
          <span>
            © {new Date().getFullYear()} Succes Manta. All rights reserved.
          </span>
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
