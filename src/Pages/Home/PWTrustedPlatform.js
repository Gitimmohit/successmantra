import React, { useEffect, useState } from "react";
import "./PWTrustedPlatform.css";

const PWTrustedPlatform = () => {
  const liveTestimonials = [
      {
        id: 1,
        text: "Success Mantra's banking masterclass helped me crack SBI PO .",
        name: "Rahul Verma",
        photo: "👨‍💼",
        exam: "SBI PO 2023",
        achievement: "All India Rank 24"
      },
      {
        id: 2,
        text: "From doubt to selection - Success Mantra's SSC GD course made it possible!",
        name: "Priya Yadav",
        photo: "👮‍♀️",
        exam: "SSC GD 2024",
        achievement: "Selected in first attempt"
      },
      {
        id: 3,
        text: "The daily current affairs sessions at Success Mantra were key for my RBI Grade B success",
        name: "Amit Deshmukh",
        photo: "👨‍⚖️",
        exam: "RBI Grade B 2023",
        achievement: "Phase II Score: 78/100"
      },
      {
        id: 4,
        text: "Quant shortcuts from Success Mantra helped me secore 9th rank in SBI PO",
        name: "Neha Gupta",
        photo: "👩‍💻",
        exam: "IBPS Clerk 2024",
        achievement: "Perfect score in Quantitative Aptitude"
      },
      {
        id: 5,
        text: "Success Mantra's interview guidance got me through the toughest UPSC interview panel!",
        name: "Ankit Joshi",
        photo: "👨‍🎓",
        exam: "UPSC CSE 2023",
        achievement: "Final Rank 112"
      }
    
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % liveTestimonials.length);
      }, 4000); // Rotate every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, liveTestimonials.length]);

  return (
    <section className="trusted-platform">
      <div className="container1">
        {/* Main Heading Section with gradient background */}
        <div className="main-heading-section">
          <h1 className="main-heading">
            <span className="gradient-text">Best & Affordable</span>
            <br />
            <span className="highlight-text">Educational Platform</span>
          </h1>
          <p className="sub-heading">
            Unlock your potential by signing up with{" "}
            <span className="brand-name">Success Mantra Classes</span> - The
            most affordable learning solution
          </p>
          <div className="sparkle-icon">✨</div>
        </div>

        {/* Decorative Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-icon">📚</div>
          <div className="divider-line"></div>
        </div>

        {/* Get Started Section */}
        <div
          className="get-started-section"          
        >
          <h2 className="section-title1">
            <span className="section-title1-icon">🚀</span>
            Get Started
            <span className="section-title1-icon">🎯</span>
          </h2>

          {/* Live Stats Section with animated border */}
          <div className="live-stats-section1">
            <div className="live-tag-carousel-container">
              <div className="testimonial-carousel">
                {liveTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-slide ${
                      index === currentTestimonial ? "active" : ""
                    }`}
                  >
                    <div className="student-avatar">{testimonial.photo}</div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                      <div className="student-name">- {testimonial.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👨‍🏫</div>
                <h3 className="stat-title">Daily Live</h3>
                <p className="stat-description">Interactive classes</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <h3 className="stat-title">10 Million +</h3>
                <p className="stat-description">Tests & study materials</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏰</div>
                <h3 className="stat-title">24 x 7</h3>
                <p className="stat-description">Doubt solving</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏛️</div>
                <h3 className="stat-title">100 +</h3>
                <p className="stat-description">Offline centres</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-icon">🎓</div>
          <div className="divider-line"></div>
        </div>

        {/* Alakh Sir Section with testimonial style */}
        <div className="alakh-section">
          <div className="quote-icon">❝</div>
          <h3 className="alakh-question">
            Rishabh Sir, What is Success Mantra?
          </h3>
          <p className="alakh-answer">
            Success Mantra is where students learn with{" "}
            <span className="highlight-word">love</span> and can grow with{" "}
            <span className="highlight-word">guidance</span>
          </p>
          <div className="signature">- Rishabh Sir</div>
        </div>
      </div>
    </section>
  );
};

export default PWTrustedPlatform;
