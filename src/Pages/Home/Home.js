// components/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PopularCourses from "./PopularCourses";
import PWTrustedPlatform from "./PWTrustedPlatform";
import SuccessStory from "./SuccessStory";
import banner1 from "../../img/banner1.jpg"
import banner2 from "../../img/banner2.jpg"
import banner3 from "../../img/banner3.jpg"

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      title: "GATE 2024 Preparation",
      subtitle: "Comprehensive Courses for All Streams",
      bgColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      img:banner1,
    },
    {
      id: 2,
      title: "New Batches Starting Soon",
      subtitle: "Enroll Now for Early Bird Discount",
      bgColor: "linear-gradient(135deg, #10b981, #059669)",
      img:banner2,
    },
    {
      id: 3,
      title: "Learn from Top Educators",
      subtitle: "Experience the PW Difference",
      bgColor: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      img:banner3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="main-content">
      {/* Carousel Section */}
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className="carousel-slide"
              style={{ backgroundImage: `url(${item.img})`}} 
            >
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-subtitle">{item.subtitle}</p>
                <button className="carousel-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FiChevronRight />
        </button>

        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 800);
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Existing Content */}
      <div>
        <PWTrustedPlatform />
      </div>
      <div className="content-section">
        <PopularCourses />
      </div>
      <div>
        <SuccessStory />
      </div>
    </div>
  );
};

export default Home;
