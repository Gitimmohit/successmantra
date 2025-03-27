import React, { useEffect, useState } from "react";
import "./PWTrustedPlatform.css";

const PWTrustedPlatform = () => {
    const liveTestimonials = [
        {
          id: 1,
          text: "Daily LIVE classes helped me score 650+ in NEET!",
          name: "Rahul Sharma",
          photo: "👨‍🎓"
        },
        {
          id: 2,
          text: "24/7 doubt solving is the best feature of PW",
          name: "Priya Patel",
          photo: "👩‍🎓"
        },
        {
          id: 3,
          text: "The interactive LIVE classes are amazing!",
          name: "Amit Singh", 
          photo: "👨‍💻"
        }
      ];
    
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
      const [isAutoPlaying] = useState(true);
    
      useEffect(() => {
        let interval;
        if (isAutoPlaying) {
          interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % liveTestimonials.length);
          }, 4000); // Rotate every 4 seconds
        }
        return () => clearInterval(interval);
      }, [isAutoPlaying, liveTestimonials.length]);

  return (
    <section className="trusted-platform">
      <div className="container">
        {/* Main Heading Section with gradient background */}
        <div className="main-heading-section">
          <h1 className="main-heading">
            <span className="gradient-text">Best & Affordable</span>
            <br />
            <span className="highlight-text">Educational Platform</span>
          </h1>
          <p className="sub-heading">
            Unlock your potential by signing up with{" "}
            <span className="brand-name">Success Mantra Classes</span> - The most
            affordable learning solution
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
        <div className="get-started-section">
          <h2 className="section-title">
            <span className="section-title-icon">🚀</span>
            Get Started
            <span className="section-title-icon">🎯</span>
          </h2>

          {/* Live Stats Section with animated border */}
          <div className="live-stats-section">
          <div className="live-tag-carousel-container">            
            
            <div className="testimonial-carousel">
              {liveTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
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
          <h3 className="alakh-question">Rishabh Sir, What is Success Mantra?</h3>
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
