import React, { useState } from "react";
import "./SuccessStory.css";
import { FaMedal, FaQuoteRight, FaStar } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";

const SuccessStory = () => {
  const [activeTab, setActiveTab] = useState("neet");
  const [expandedCard, setExpandedCard] = useState(null);

  const successStories = {
    neet: [
      {
        id: 1,
        name: "Tathagat Awatar",
        rank: "AIR 1",
        score: "720/720",
        testimonial:
          "Success's Mantra structured approach transformed my preparation. The daily practice problems and regular mock tests mirrored the actual SSC GD difficulty perfectly.",
        photo: "TA",
        year: 2024,
        batch: "Yakeen",
        subjects: ["Physics", "Chemistry", "Biology"],
      },
      {
        id: 2,
        name: "Priya Sharma",
        rank: "AIR 23",
        score: "710/720",
        testimonial:
          "The doubt-solving sessions were game-changing. I improved from 550 to 710 in just 6 months with Success Mantra's guidance.",
        photo: "PS",
        year: 2024,
        batch: "Arjuna",
        subjects: ["Biology", "Chemistry"],
      },
    ],
    jee: [
      {
        id: 3,
        name: "Rahul Verma",
        rank: "AIR 12",
        score: "98.9%",
        testimonial:
          "Success Mantra's JEE test series was tougher than actual JEE, which made the real exam feel easy. The concept videos saved me hundreds of hours.",
        photo: "RV",
        year: 2023,
        batch: "JEE Champion",
        subjects: ["Maths", "Physics"],
      },
    ],
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="success-showcase">
      {/* Animated Header */}
      <div className="showcase-header">
        <div className="sparkle"></div>
        <h1>
          <span className="highlight">Success Mantra</span> Success Stories
          <FaMedal className="medal-icon" />
        </h1>
        <p className="subtitle">Where Dreams Become Ranks</p>
      </div>

      {/* Interactive Tab System */}
      <div className="story-tabs">
        <button
          className={`tab-btn ${activeTab === "neet" ? "active" : ""}`}
          onClick={() => setActiveTab("neet")}
        >
          SSC GD Toppers <RiMedalFill style={{ color: "#4CAF50" }} />
        </button>
        <button
          className={`tab-btn ${activeTab === "jee" ? "active" : ""}`}
          onClick={() => setActiveTab("jee")}
        >
          JPSC Achievers <RiMedalFill style={{ color: "#2196F3" }} />
        </button>
      </div>

      {/* 3D Card Grid */}
      <div className="story-grid">
        {successStories[activeTab].map((student) => (
          <div
            key={student.id}
            className={`story-card ${
              expandedCard === student.id ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(student.id)}
          >
            <div className="card-inner">
              {/* Front of Card */}
              <div className="card-front">
                <div className="student-badge">
                  <div className="avatar">{student.photo}</div>
                  <div className="rank-bubble">
                    <FaStar className="star-icon" />
                    <span>#{student.rank}</span>
                  </div>
                </div>
                <h3>{student.name}</h3>
                <p className="score">{student.score}</p>
                <div className="batch-tag">{student.batch}</div>
                <FaQuoteRight className="quote-icon" />
              </div>

              {/* Back of Card (visible when expanded) */}
              <div className="card-back">
                <h3>{student.name}'s Journey</h3>
                <p className="testimonial">
                  <FaQuoteRight className="quote-icon" />
                  {student.testimonial}
                </p>
                <div className="subject-tags">
                  {student.subjects.map((subject, index) => (
                    <span key={index}>{subject}</span>
                  ))}
                </div>
                <div className="year-badge">Batch {student.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">AIR 100</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1000+</div>
          <div className="stat-label">Top 500</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">10K+</div>
          <div className="stat-label">Selections</div>
        </div>
      </div>

      {/* Floating CTA */}
    </div>
  );
};

export default SuccessStory;
