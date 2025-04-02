import React from "react";
import "./WhyChooseUs.css"; // We'll add CSS later

const WhyChooseUs = () => {
  // Features Data (You can modify as needed)
  const features = [
    {
      icon: "teacher-icon.png", // Replace with your icon path
      title: "Expert Faculty",
      description: "Learn from highly experienced teachers with proven success records in UPSC, JPSC, SSC, and other exams.",
    },
    {
      icon: "book-icon.png",
      title: "Quality Study Material",
      description: "Get well-researched notes, current affairs updates, and mock tests designed by experts.",
    },
    {
      icon: "mentor-icon.png",
      title: "Personalized Mentorship",
      description: "One-on-one doubt-solving sessions and customized study plans for every student.",
    },
    {
      icon: "success-icon.png",
      title: "Proven Track Record",
      description: "Consistent top rankers in JPSC, UPSC, SSC, and other state PSC exams.",
    },
    {
      icon: "test-icon.png",
      title: "Regular Mock Tests",
      description: "Simulated exam environments with detailed performance analysis.",
    },
    {
      icon: "fee-icon.png",
      title: "Affordable Fees",
      description: "Quality coaching at reasonable prices with flexible payment options.",
    },
    {
      icon: "fee-icon.png",
      title: "Affordable Fees",
      description: "Quality coaching at reasonable prices with flexible payment options.",
    },
    {
      icon: "fee-icon.png",
      title: "Affordable Fees",
      description: "Quality coaching at reasonable prices with flexible payment options.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>
          Why <span>Choose Us?</span>
        </h2>
        <p className="subtitle">
          We provide the best coaching to help you succeed in competitive exams
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
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