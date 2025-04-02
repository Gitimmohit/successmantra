import React, { useState } from 'react';
import { FaMedal, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import './SuccessStory.css';

const SuccessStory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const successStories = [
    {
      id: 1,
      name: 'Rahul Sharma',
      photo: 'RS',
      rank: 1,
      score: '98%',
      batch: 'JPSC 2022',
      subjects: ['History', 'Polity', 'Geography'],
      year: '2022',
      testimonial: 'The comprehensive study material and regular mock tests helped me secure Rank 1 in JPSC. The faculty guidance was exceptional!',
    },
    {
      id: 2,
      name: 'Priya Patel',
      photo: 'PP',
      rank: 3,
      score: '95%',
      batch: 'SSC CGL 2021',
      subjects: ['Quant', 'Reasoning', 'English'],
      year: '2021',
      testimonial: 'The structured approach and doubt-clearing sessions made all the difference in my preparation journey.',
    },
    {
      id: 3,
      name: 'Priya Patel',
      photo: 'PP',
      rank: 3,
      score: '95%',
      batch: 'SSC CGL 2021',
      subjects: ['Quant', 'Reasoning', 'English'],
      year: '2021',
      testimonial: 'The structured approach and doubt-clearing sessions made all the difference in my preparation journey.',
    },
    // Add more stories as needed
  ];

  return (
    <section className="success-showcase">
      {/* Header Section */}
      <div className="showcase-header">
        <h1>
          Our <span className="highlight">Success Stories</span>
          <FaMedal className="medal-icon" />
        </h1>
        <p className="subtitle">Inspiring journeys of our top performers</p>
      </div>

      {/* Cards Grid */}
      <div className="story-grid">
        {successStories.map((student) => (
          <div
            key={student.id}
            className={`story-card ${expandedCard === student.id ? 'expanded' : ''}`}
            onClick={() => toggleCard(student.id)}
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
                <FaQuoteLeft className="quote-icon" />
              </div>

              {/* Back of Card */}
              <div className="card-back">
                <h3>{student.name}'s Journey</h3>
                <p className="testimonial">
                  <FaQuoteLeft className="quote-icon" />
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
    </section>
  );
};

export default SuccessStory;