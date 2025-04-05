// components/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PopularCourses from "./PopularCourses";
import PWTrustedPlatform from "./PWTrustedPlatform";
import SuccessStory from "./SuccessStory";
import banner1 from "../../img/slide4.jpeg";
import banner2 from "../../img/slide2.jpeg";
import banner3 from "../../img/slide1.jpeg";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
//for animation
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
// data-aos="fade-up"

  const carouselItems = [
    {
      id: 1,
      title: "One Platform for Complete UPSC, JPSC & BPSC Preparation",
      subtitle: "Your Journey from Aspirant to Officer Starts Here",
      bgColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      img: banner1,
    },
    {
      id: 2,
      title:
        "Complete Preparation for IBPS PO, SBI Clerk, RBI Assistant & More",
      subtitle:
        "Master IBPS, SBI, RBI & More with Expert Guidance & Smart Study Plans,Trusted by 1M+ Banking Aspirants for Consistent Selections.",
      bgColor: "linear-gradient(135deg, #10b981, #059669)",
      img: banner2,
    },
    {
      id: 3,
      title: "Fast-track Your Selection with Our Tailored Courses",
      subtitle:
        "Comprehensive coaching for RRB NTPC, Group D, ALP, and other railway exams. Learn from top educators and boost your chances of success.",
      bgColor: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      img: banner3,
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
              style={{
                backgroundImage: `url(${item.img})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-subtitle">{item.subtitle}</p>
                <button
                  className="carousel-btn"
                  onClick={() => {
                    document
                      .getElementById("course")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </button>
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
      <div className="content-section" id="course">
        <PopularCourses />
      </div>
      <div>
        <SuccessStory />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
