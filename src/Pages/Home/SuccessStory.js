import React, { useEffect, useState } from 'react';
import { FaMedal, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import './SuccessStory.css';
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from  "../../img/one.jpeg"
import img2 from "../../img/two.jpeg"
import img3 from "../../img/three.jpeg"

const SuccessStory = () => {
  //for animation
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,
      });
    }, []);
  // data-aos="fade-up"

  const [activeTab, setActiveTab] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const successStories = [
    {
      id: 1,
      name: 'Komal Kumari',
      rank: 9,
      photo: img3,
      score: '95%',
      batch: 'SBI PO 2024',
      subjects: ['Quantitative Aptitude', 'Reasoning', 'English'],
      year: '2024',
      small:"Thanks to Success Mantra’s expert guidance and unwavering support, I secured 9th rank in SBI PO 2024",
      testimonial: 'Thanks to the focused practice sessions and expert mentorship, I was able to secure Rank 9 in SBI PO 2024. The personalized guidance made all the difference!',
    },
    {
      id: 2,
      name: 'Dulal Modak',
      photo: img2,
      rank: 3,
      score: '95%',
      batch: 'SSC GD 2021',
      small: "Grateful to Success Mantra for their continuous support in helping me crack SSC GD with confidence.",
      subjects: ['General Awareness', 'Reasoning', 'Quantitative Aptitude'],
      year: '2021',
      testimonial: 'Success Mantra’s focused preparation strategy and practice sessions played a key role in my SSC GD journey.',
    },    
    {
      id: 3,
      name: 'Rajiv Nandan',
      photo: img1,
      rank: 167,
      score: '92%',
      batch: 'SBI PO 2024',
      subjects: ['Quantitative Aptitude', 'Reasoning Ability', 'English Language'],
      small: "A heartfelt thanks to Success Mantra for guiding me through every step of my SBI PO Mains preparation.",
      year: '2024',
      testimonial: "Clearing SBI PO Mains wouldn't have been possible without the mock tests, strategy sessions, and constant motivation from the Success Mantra team.",
    },    
  ];

  return (
    <section className="success-showcase">
      {/* Header Section */}
      <div className="showcase-header" data-aos="fade-up">
        <h1>
          Our <span className="highlight">Success Stories</span>
          <FaMedal className="medal-icon" />
        </h1>
        <p className="subtitle">Inspiring journeys of our top performers</p>
      </div>

      {/* Cards Grid */}
      <div className="story-grid" data-aos="fade-up">
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
                  <div className="avatar">
                  <img src={student.photo} alt={student.name} style={{height:"100%",width:"100%",borderRadius:"50%"}}/>
                  </div>
                  <div className="rank-bubble">
                    <FaStar className="star-icon" />
                    <span>#{student.rank}</span>
                  </div>
                </div>
                <h3>{student.name}</h3>
                <span>{student.small}</span>
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