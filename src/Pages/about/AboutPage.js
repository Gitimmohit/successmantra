import React from 'react';
import { FaChalkboardTeacher, FaAward, FaUserGraduate, FaLightbulb } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import teamImg from '../../img/banner1.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Transforming Dreams Into Achievements</h1>
          <p>Since 2010, we've been guiding students to success in competitive exams with proven strategies and personalized mentoring</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>

            <p>To empower every aspirant with comprehensive knowledge, strategic preparation, and the confidence to excel in competitive examinations like JPSC, SSC, and more.</p>
            <div className="mission-stats1">
              <div className="stat-card1">
                <FaUserGraduate className="stat-icon1" />
                <h3>10,000+</h3>
                <p>Students Trained</p>
              </div>
              <div className="stat-card1">
                <FaAward className="stat-icon1" />
                <h3>250+</h3>
                <p>Top Rankers</p>
              </div>
              <div className="stat-card1">
                <FaLightbulb className="stat-icon1" />
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <h2>Our Unique Approach</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-icon">1</div>
            <h3>Personalized Learning</h3>
            <p>Customized study plans based on individual strengths and weaknesses</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">2</div>
            <h3>Expert Faculty</h3>
            <p>Learn from former toppers and subject matter experts</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">3</div>
            <h3>Result Analysis</h3>
            <p>Detailed performance tracking with improvement roadmaps</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">4</div>
            <h3>Mock Exam Ecosystem</h3>
            <p>Real exam simulation with detailed feedback</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-content">
          <div className="team-text">
            <h2>Meet Our Mentors</h2>
            <p>Our team comprises passionate educators, former civil servants, and subject experts who bring years of examination expertise and mentoring experience.</p>
            <ul className="team-highlights">
              <li><GiAchievement /> Average 10+ years teaching experience</li>
              <li><GiAchievement /> Multiple top rankers in various batches</li>
              <li><GiAchievement /> Continuous professional development</li>
            </ul>
          </div>
          <div className="team-image">
            <img src={teamImg} alt="Our teaching team" />
          </div>
        </div>
      </section>

      {/* Success Story Callout */}
      <section className="success-callout">
        <div className="callout-content">
          <FaChalkboardTeacher className="callout-icon" />
          <h2>Ready to Begin Your Success Journey?</h2>
          <p>Join hundreds of students who've achieved their dream ranks with our guidance</p>
          <button className="cta-button">Explore Our Programs</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;