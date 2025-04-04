import React, { useEffect } from "react";
import "./WhyChooseUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaChalkboardTeacher,
  FaBook,
  FaUserTie,
  FaAward,
  FaClipboardList,
  FaRupeeSign,
  FaHandsHelping,
  FaQuestionCircle
} from "react-icons/fa";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher className="feature-icon" />,
      title: "Expert Faculty",
      description: "Learn from highly experienced teachers with proven success records in UPSC, JPSC, SSC, and other exams.",
    },
    {
      icon: <FaBook className="feature-icon" />,
      title: "Quality Study Material",
      description: "Get well-researched notes, current affairs updates, and mock tests designed by experts.",
    },
    {
      icon: <FaUserTie className="feature-icon" />,
      title: "Personalized Mentorship",
      description: "One-on-one doubt-solving sessions and customized study plans for every student.",
    },
    {
      icon: <FaAward className="feature-icon" />,
      title: "Proven Track Record",
      description: "Consistent top rankers in JPSC, UPSC, SSC, and other state PSC exams.",
    },
    {
      icon: <FaClipboardList className="feature-icon" />,
      title: "Regular Mock Tests",
      description: "Simulated exam environments with detailed performance analysis.",
    },
    {
      icon: <FaRupeeSign className="feature-icon" />,
      title: "Affordable Fees",
      description: "Quality coaching at reasonable prices with flexible payment options.",
    },
    {
      icon: <FaHandsHelping className="feature-icon" />,
      title: "Supportive Staff",
      description: "Friendly and dedicated staff always ready to assist students throughout their journey.",
    },
    {
      icon: <FaQuestionCircle className="feature-icon" />,
      title: "Doubt Solving Classes",
      description: "Dedicated sessions to clarify doubts and ensure strong conceptual understanding.",
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 data-aos="fade-up">
          Why <span>Choose Us?</span>
        </h2>
        <p className="subtitle" data-aos="fade-up">
          We provide the best coaching to help you succeed in competitive exams
        </p>

        <div className="features-grid" data-aos="fade-up">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
