import React, { useEffect, useState } from "react";
import "./Gallery.css";
import galary from "../../img/gal2.jpeg";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  // Sample achievement data
  const achievements = [
    {
      id: 1,
      title: "Top Coaching Center 2023",
      description: "Awarded as the best coaching center in the state for our exceptional results",
      date: "15 Jan 2023",
      image: "award1.jpg",
      category: "Awards",
    },
    {
      id: 2,
      title: "1000+ Successful Students",
      description: "Crossed the milestone of 1000+ successful placements and admissions",
      date: "30 Mar 2023",
      image: "milestone.jpg",
      category: "Milestones",
    },
    {
      id: 3,
      title: "New Center Inauguration",
      description: "Opened our new state-of-the-art facility in the city center",
      date: "12 May 2023",
      image: "center.jpg",
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "Best Faculty Team",
      description: "Recognized for having the most qualified and experienced teaching staff",
      date: "8 Jul 2023",
      image: "faculty.jpg",
      category: "Recognition",
    },
    {
      id: 5,
      title: "Innovative Teaching Award",
      description: "Received award for our revolutionary teaching methodology",
      date: "22 Sep 2023",
      image: "teaching.jpg",
      category: "Awards",
    },
    {
      id: 6,
      title: "Student Success Stories",
      description: "Featured in national magazine for outstanding student achievements",
      date: "5 Nov 2023",
      image: "feature.jpg",
      category: "Media",
    },
  ];

  const news = [
    {
      id: 1,
      title: "New Batch Announcement",
      excerpt: "We are launching new batches for competitive exam preparation",
      date: "10 Dec 2023",
    },
    {
      id: 2,
      title: "Workshop Schedule",
      excerpt: "Upcoming career guidance workshops for students",
      date: "25 Dec 2023",
    },
  ];

  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.gr-animate-on-scroll');
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.85;

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
          element.classList.add('gr-animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [feedback, setFeedback] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      role: "UPSC 2022 Topper",
      rating: 5,
      comment: "The guidance and study material provided by this institute helped me secure Rank 12 in UPSC. The faculty's dedication is unmatched!",
      image: "student1.jpg",
      selected: true
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "SSC CGL 2023",
      rating: 5,
      comment: "I cleared SSC CGL in my first attempt thanks to the strategic approach and regular mock tests conducted by the institute.",
      image: "student2.jpg",
      selected: false
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "JPSC 2021",
      rating: 4,
      comment: "The interview preparation sessions were extremely helpful. The mentors gave personalized attention to each student.",
      image: "student3.jpg",
      selected: false
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Banking PO 2023",
      rating: 5,
      comment: "The faculty's expertise in quantitative aptitude helped me improve my score dramatically in just 3 months!",
      image: "student4.jpg",
      selected: false
    }
  ]);

  const [activeFeedback, setActiveFeedback] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
    course: ""
  });

  // Auto rotate feedback
  useEffect(() => {
    const interval = setInterval(() => {
      nextFeedback();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeFeedback]);

  const nextFeedback = () => {
    setActiveFeedback((prev) => (prev === feedback.length - 1 ? 0 : prev + 1));
  };

  const prevFeedback = () => {
    setActiveFeedback((prev) => (prev === 0 ? feedback.length - 1 : prev - 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    const newFeedback = {
      id: feedback.length + 1,
      name: formData.name,
      role: formData.course,
      rating: parseInt(formData.rating),
      comment: formData.comment,
      image: "default.jpg",
      selected: false
    };
    
    setFeedback([...feedback, newFeedback]);
    setFormData({
      name: "",
      email: "",
      rating: 5,
      comment: "",
      course: ""
    });
    
    alert("Thank you for your feedback!");
  };

  return (
    <div className="gr-gallery-page">
      {/* Header Section with Animation */}
      <div 
        className="gr-gallery-header gr-animate-on-scroll"
        style={{
          position: "relative",
          height: "90vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={galary}
          alt="Gallery header"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <div
          className="gr-header-content"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            zIndex: 1,
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ 
            fontSize: "2.5rem", 
            marginBottom: "1rem",
            color: "white"
          }}>
            Learn with an amazing Team
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            maxWidth: "600px", 
            margin: "0 auto",
            color: "white"
          }}>
            We're constantly trying to express ourselves and actualize our dreams.
          </p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="gr-section-title1 gr-animate-on-scroll">
        <h2>OUR ACHIEVEMENTS</h2>
        <div className="gr-title-divider"></div>
      </div>

      <div className="gr-achievements-grid">
        {achievements.map((achievement, index) => (
          <div 
            key={achievement.id} 
            className={`gr-achievement-card gr-animate-on-scroll gr-delay-${index % 3}`}
          >
            <div className="gr-card-image">
              <img
                src={galary}
                alt={achievement.title}
              />
              <div className="gr-category-badge">{achievement.category}</div>
            </div>
            <div className="gr-card-content">
              <h3>{achievement.title}</h3>
              <p className="gr-description">{achievement.description}</p>
              <div className="gr-card-footer">
                <span className="gr-date">{achievement.date}</span>
                <button className="gr-read-more">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* News Section */}
      <div className="gr-section-title gr-animate-on-scroll">
        <h2>LATEST IN NEWS</h2>
        <div className="gr-title-divider"></div>
      </div>

      <div className="gr-news-section">
        {news.map((item, index) => (
          <div 
            key={item.id} 
            className={`gr-news-card gr-animate-on-scroll gr-delay-${index % 2}`}
          >
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div className="gr-news-footer">
              <span>{item.date}</span>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="gr-feedback-section">
        <div className="gr-section-title gr-animate-on-scroll">
          <h2>SUCCESS STORIES & FEEDBACK</h2>
          <div className="gr-title-divider"></div>
          <p className="gr-section-subtitle">Hear what our successful candidates say about us</p>
        </div>

        <div className="gr-feedback-container">
  <div className="gr-feedback-carousel">
    <button 
      className="gr-nav-btn gr-prev" 
      onClick={prevFeedback}
      aria-label="Previous feedback"
    >
      <FaChevronLeft />
    </button>
    
    <div className="gr-feedback-cards">
      {feedback.map((item, index) => (
        <div 
          key={item.id} 
          className={`gr-feedback-card ${index === activeFeedback ? 'gr-active' : ''}`}
          style={{
            transform: `translateX(${(index - activeFeedback) * 120}%)`,
            opacity: index === activeFeedback ? 1 : 0.6,
            zIndex: index === activeFeedback ? 2 : 1,
            cursor: 'pointer'
          }}
          onClick={() => setActiveFeedback(index)}
        >
          <div className="gr-feedback-image">
            <img 
              src={galary} 
              alt={item.name} 
              className="gr-feedback-avatar"
            />
            <div className="gr-feedback-rating-badge">
              {item.rating}.0
            </div>
          </div>
          <div className="gr-feedback-content">
            <FaQuoteLeft className="gr-quote-icon" />
            <p className="gr-feedback-comment">
              "{item.comment}"
            </p>
            <div className="gr-feedback-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < item.rating ? 'gr-star gr-filled' : 'gr-star'} 
                />
              ))}
            </div>
            <div className="gr-feedback-author">
              <h4 className="gr-feedback-name">{item.name}</h4>
              <p className="gr-feedback-role">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button 
      className="gr-nav-btn gr-next" 
      onClick={nextFeedback}
      aria-label="Next feedback"
    >
      <FaChevronRight />
    </button>
  </div>

  <div className="gr-feedback-indicators">
    {feedback.map((_, index) => (
      <button
        key={index}
        className={`gr-indicator ${index === activeFeedback ? 'gr-active' : ''}`}
        onClick={() => setActiveFeedback(index)}
        aria-label={`Go to feedback ${index + 1}`}
      />
    ))}
  </div>
</div>

        {/* Feedback Form */}
        <div className="gr-feedback-form-container gr-animate-on-scroll">
          <h3>Share Your Experience</h3>
          <form onSubmit={handleSubmitFeedback} className="gr-feedback-form">
            <div className="gr-form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="gr-form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="gr-form-group">
              <label htmlFor="course">Course Taken*</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Course</option>
                <option value="UPSC">UPSC</option>
                <option value="SSC CGL">SSC CGL</option>
                <option value="JPSC">JPSC</option>
                <option value="Banking PO">Banking PO</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="gr-form-group">
              <label>Your Rating*</label>
              <div className="gr-rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`star-${star}`}
                      name="rating"
                      value={star}
                      checked={parseInt(formData.rating) === star}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`star-${star}`} className="gr-star-label">
                      <FaStar className={star <= formData.rating ? 'gr-filled' : ''} />
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="gr-form-group">
              <label htmlFor="comment">Your Feedback*</label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className="gr-submit-btn">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gallery;