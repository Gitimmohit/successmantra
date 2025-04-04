import React, { useState, useEffect } from "react";
import "./PopularCourses.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularCourses = () => {
  const navigate = useNavigate();
// for animation
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
// data-aos="fade-up"

  // Course data
  const allCourses = [
    // SSC Courses
    {
      id: 1,
      title: "SSC CGL Complete Course",
      tag: "BESTSELLER",
      description: "Comprehensive preparation for Combined Graduate Level exam",
      author: "By Success Mantra Faculty",
      category: "SSC",
    },
    {
      id: 2,
      title: "SSC CHSL Mastery",
      description:
        "Complete preparation for Lower Division Clerk/Postal Assistant",
      author: "By Success Mantra Faculty",
      category: "SSC",
    },
    {
      id: 3,
      title: "SSC GD Constable",
      tag: "NEW",
      description: "Physical + Written exam preparation package",
      author: "Rishabh Sir",
      category: "SSC",
    },
    {
      id: 4,
      title: "SSC MTS Professional",
      description: "Specialized training for Multi-Tasking Staff exam",
      author: "By Success Mantra Faculty",
      category: "SSC",
    },

    // Railway Courses
    {
      id: 5,
      title: "Railway NTPC Pro",
      description: "Complete preparation for Non-Technical Popular Categories",
      author: "Rishabh Sir",
      category: "Railway",
    },
    {
      id: 6,
      title: "Railway ALP Technician",
      description:
        "Technical + Non-Technical modules for Assistant Loco Pilots",
      author: "By Success Mantra Faculty",
      category: "Railway",
    },
    {
      id: 7,
      title: "Railway RPF Complete",
      description: "Specialized training for Railway Protection Force exam",
      author: "Rishabh Sir",
      category: "Railway",
    },
    {
      id: 8,
      title: "Railway Group-D Express",
      description: "Foundation course for Level-1 posts",
      author: "Rishabh Sir",
      category: "Railway",
    },

    // Banking Courses
    {
      id: 9,
      title: "Bank PO Professional",
      tag: "HOT",
      description: "Complete Probationary Officer exam preparation",
      author: "By Success Mantra Faculty",
      category: "Banking",
    },
    {
      id: 10,
      title: "Bank Clerk Foundation",
      description: "Specialized training for clerical level examinations",
      author: "Rishabh Sir",
      category: "Banking",
    },

    // State PSCs
    {
      id: 11,
      title: "JPSC Comprehensive",
      description: "Complete Jharkhand Public Service Commission preparation",
      author: "By Success Mantra Faculty",
      category: "State PSC",
    },
    {
      id: 12,
      title: "JSSC Specialized",
      description: "Jharkhand Staff Selection Commission complete package",
      author: "By Success Mantra Faculty",
      category: "State PSC",
    },
  ];

  const [visibleCourses, setVisibleCourses] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const loadMoreCourses = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCourses((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  const handleEnroll = () => {
    navigate("/register", { state: { scrollTo: "reg" } });
  };

  return (
    <section className="popular-courses">
      <div className="container-p">
        {/* Popular Courses Heading */}
        <span className={`section-title ${animated ? "animate-fade-in" : ""}`} data-aos="fade-up">
          Popular Courses
        </span>
        <hr />

        {/* Live Stats Section - Positioned below the heading */}

        {/* Courses Grid */}
        <div className="courses-grid" data-aos="fade-up">
          {allCourses.slice(0, visibleCourses).map((course, index) => (
            <div
              key={course.id}
              className={`course-card ${animated ? "animate-slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.15 + 0.8}s` }}
            >
              {course.tag && (
                <span
                  className={`course-tag1 ${course.tag.toLowerCase()} ${
                    animated ? "animate-pop" : ""
                  }`}
                >
                  {course.tag}
                </span>
              )}

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              <div className="course-meta">
                <span className="course-category">{course.category}</span>
                <div className="course-pricing">
                  <span className="original-price">{course.price}</span>
                  {/* <span className="discount">{course.discount}</span> */}
                </div>
              </div>

              <div className="course-author">{course.author}</div>

              <button className="enroll-btn" onClick={handleEnroll}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {visibleCourses < allCourses.length && (
          <div className="load-more-container" data-aos="fade-up">
            <button
              className={`load-more-btn ${isLoading ? "loading" : ""}`}
              onClick={loadMoreCourses}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View More Courses"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCourses;
