import React, { useEffect } from "react";
import "./Gallery.css";
import galary from "../../img/gal2.jpeg";

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
      const elements = document.querySelectorAll('.animate-on-scroll');
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.85;

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="gallery-page">
      {/* Header Section with Animation */}
      <div 
        className="gallery-header animate-on-scroll"
        style={{
          position: "relative",
          height: "50vh",
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
          className="header-content"
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
      <div className="section-title1 animate-on-scroll">
        <h2>OUR ACHIEVEMENTS</h2>
        <div className="title-divider"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div 
            key={achievement.id} 
            className={`achievement-card animate-on-scroll delay-${index % 3}`}
          >
            <div className="card-image">
              <img
                src={`/images/${achievement.image}`}
                alt={achievement.title}
              />
              <div className="category-badge">{achievement.category}</div>
            </div>
            <div className="card-content">
              <h3>{achievement.title}</h3>
              <p className="description">{achievement.description}</p>
              <div className="card-footer">
                <span className="date">{achievement.date}</span>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* News Section */}
      <div className="section-title animate-on-scroll">
        <h2>LATEST IN NEWS</h2>
        <div className="title-divider"></div>
      </div>

      <div className="news-section">
        {news.map((item, index) => (
          <div 
            key={item.id} 
            className={`news-card animate-on-scroll delay-${index % 2}`}
          >
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div className="news-footer">
              <span>{item.date}</span>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;