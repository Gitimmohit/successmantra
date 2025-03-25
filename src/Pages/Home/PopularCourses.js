import React, { useState, useEffect } from "react";
import "./PopularCourses.css";

const PopularCourses = () => {
  // Live stats data
  const liveStats = [
    {
      title: "Daily Live",
      description: "Interactive classes",
      icon: "🎯",
    },
    {
      title: "10 Million +",
      description: "Tests, sample papers & notes",
      icon: "📚",
    },
    {
      title: "24 x 7",
      description: "Doubt solving sessions",
      icon: "🕒",
    },
    {
      title: "100 +",
      description: "Offline centres",
      icon: "🏢",
    },
  ];

  // Course data
  const allCourses = [
    {
      id: 1,
      title: "UGRE 2025",
      tag: "FREE",
      description: "Comprehensive preparation for undergraduate entrance",
      price: "$99",
      discount: "200% OFF",
      author: "By Dane Elm",
      category: "Foundation",
    },
    {
      id: 2,
      title: "MISSION CUET 2025",
      description: "Complete CUET exam preparation package",
      price: "$129",
      discount: "150% OFF",
      author: "By PW Faculty",
      category: "Entrance Exam",
    },
    {
      id: 3,
      title: "RAILWAY TEACHER RECRUITMENT 2025",
      description: "Specialized coaching for teaching positions",
      price: "$149",
      discount: "180% OFF",
      author: "By Expert Educators",
      category: "Government Job",
    },
    {
      id: 4,
      title: "HISTORY Foundation",
      description: "Complete historical studies package",
      price: "$79",
      discount: "200% OFF",
      author: "By Dane Elm",
      category: "Academic",
    },
    {
      id: 5,
      title: "NEET 2025 Crash Course",
      tag: "HOT",
      description: "Last minute preparation for NEET aspirants",
      price: "$199",
      discount: "120% OFF",
      author: "By Medical Experts",
      category: "Medical",
    },
    {
      id: 6,
      title: "JEE Advanced 2025",
      description: "Advanced concepts for engineering entrance",
      price: "$179",
      discount: "160% OFF",
      author: "By IIT Alumni",
      category: "Engineering",
    },
    {
      id: 7,
      title: "UPSC Prelims 2025",
      description: "Complete civil services preliminary exam preparation",
      price: "$159",
      discount: "140% OFF",
      author: "By Civil Servants",
      category: "Civil Services",
    },
    {
      id: 8,
      title: "Bank PO Foundation",
      tag: "NEW",
      description: "Bank probationary officer exam preparation",
      price: "$119",
      discount: "170% OFF",
      author: "By Banking Experts",
      category: "Banking",
    },
    {
      id: 9,
      title: "SSC CGL 2025",
      description: "Staff Selection Commission combined graduate level",
      price: "$139",
      discount: "130% OFF",
      author: "By Government Exam Experts",
      category: "Government Job",
    },
    {
      id: 10,
      title: "CAT 2025 MBA Prep",
      description: "Complete MBA entrance preparation",
      price: "$169",
      discount: "110% OFF",
      author: "By IIM Alumni",
      category: "Management",
    },
    {
      id: 11,
      title: "CLAT 2025",
      description: "Law entrance examination preparation",
      price: "$149",
      discount: "125% OFF",
      author: "By Legal Experts",
      category: "Law",
    },
    {
      id: 12,
      title: "GATE 2025 CS & IT",
      description: "Graduate aptitude test in engineering for computer science",
      price: "$189",
      discount: "135% OFF",
      author: "By Tech Experts",
      category: "Engineering",
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

  return (
    <section className="popular-courses">
      <div className="container">
        {/* Popular Courses Heading */}
        <h2 className={`section-title ${animated ? "animate-fade-in" : ""}`}>
          Popular Courses
        </h2>

        {/* Live Stats Section - Positioned below the heading */}


        {/* Courses Grid */}
        <div className="courses-grid">
          {allCourses.slice(0, visibleCourses).map((course, index) => (
            <div
              key={course.id}
              className={`course-card ${animated ? "animate-slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.15 + 0.8}s` }}
            >
              {course.tag && (
                <span
                  className={`course-tag ${course.tag.toLowerCase()} ${
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
                  <span className="discount">{course.discount}</span>
                </div>
              </div>

              <div className="course-author">{course.author}</div>

              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>

        {visibleCourses < allCourses.length && (
          <div className="load-more-container">
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
