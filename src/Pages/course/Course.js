import React, { useState } from "react";
import "./Courses.css";
import img from "../../img/course.jpg";

const Courses = () => {
  // Sample course data
  const allCoursesData = [
    {
      id: 1,
      title: "UPPSC RO/ARO MAINS",
      subtitle: "Re-Exam Foundation Batch 2025",
      features: ["Recorded (Pre-Mains) 15", "RIDE Practice Test", "Mixed Test"],
      fullTitle: "UPPSC RO/ARO (Pre+Mains) Re-Exam Foundation Batch Recorded",
      startDate: "24 Mar 2025",
      endDate: "30 Sep 2025",
      price: "₹499",
      originalPrice: "₹799",
      mode: "Online",
      discount: "38% OFF",
    },
    {
      id: 2,
      title: "UPPSC RO/ARO RE-EXAM REVISION",
      subtitle: "Batch-2025",
      features: [
        "Comprehensive Revision",
        "Previous Year Papers",
        "Mock Tests",
      ],
      fullTitle: "UPPSC RO/ARO Re-Exam Revision Batch 2025",
      startDate: "01 Apr 2025",
      endDate: "31 Jul 2025",
      price: "₹499",
      originalPrice: "₹799",
      mode: "Online",
      discount: "38% OFF",
    },
    {
      id: 3,
      title: "Bihar SSC BSO/SSO/CGL 4",
      subtitle: "Batch 3rd Mains",
      features: [
        "By Khan Sir and Team",
        "Complete Syllabus Coverage",
        "Practice Tests",
      ],
      fullTitle: "BSO/SSO & BSSC CGL 4 (PT +Mains) Batch-2025",
      startDate: "02 Apr 2025",
      endDate: "31 Oct 2025",
      price: "₹599",
      originalPrice: "₹999",
      mode: "Online",
      discount: "40% OFF",
    },
    // Additional courses to demonstrate loading more
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 4,
      title: `Course ${i + 4}`,
      subtitle: `Batch ${2025 + i}`,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      fullTitle: `Full Course Title ${i + 4}`,
      startDate: "01 Jan 2025",
      endDate: "31 Dec 2025",
      price: "₹999",
      originalPrice: "₹1999",
      mode: i % 2 ? "Online" : "Offline",
      discount: "50% OFF",
    })),
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState(allCoursesData.slice(0, 6));

  const loadMoreCourses = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const newCount = visibleCount + 6;
      setVisibleCount(newCount);
      setCourses(allCoursesData.slice(0, newCount));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="courses-page">
      {/* Header Section */}
      <div
        className="courses-header"
        style={{
          position: "relative",
          height: "50vh",
          width: "100%",
          overflow: "hidden", // Add this to prevent image overflow
        }}
      >
        <img
          src={img}
          alt="img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover", // Uncomment this - it's crucial
            position: "absolute", // Uncomment this
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* Rest of your code remains the same */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "20px",
            textAlign: "center",
            color: "white",
            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          <h1>Explore Our Courses</h1>
          <p>
            Over 10 million learners trust us for Online and Offline Coaching
          </p>
        </div>

        <div
          className="filter-tabs"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button className="active">All Courses</button>
          <button>Online Courses</button>
          <button>Offline Courses</button>
          <button>Upcoming Courses</button>
          <button>See All</button>
        </div>
      </div>
      <hr />

      <div className="course-count">
        <span>Total Courses: {allCoursesData.length}</span>
        <span>
          Showing: {courses.length} of {allCoursesData.length} courses
        </span>
      </div>
      {/* Courses Grid */}
      <div
        className={` ${isLoading ? "loading" : ""}`}
        style={{ padding: "20px" }}
      >
        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{
                transition: "all 0.3s ease",
                opacity: isLoading ? 0.8 : 1,
                transform: isLoading ? "translateY(10px)" : "translateY(0)",
              }}
            >
              <div className="card-top">
                <h3>{course.title}</h3>
                <p className="subtitle">{course.subtitle}</p>

                <div className="features">
                  {course.features.map((feature, index) => (
                    <span key={index} className="feature-badge">
                      <span className="bullet">•</span> {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-middle">
                <p className="full-title">{course.fullTitle}</p>

                <div className="timing">
                  <span>
                    <strong>Starts On:</strong> {course.startDate}
                  </span>
                  <span>
                    <strong>Ends On:</strong> {course.endDate}
                  </span>
                </div>

                <div className="pricing">
                  <div className="price-container">
                    <span className="current-price">{course.price}</span>
                    <span className="original-price">
                      {course.originalPrice}
                    </span>
                    <span className="discount">{course.discount}</span>
                  </div>
                  <span className="mode-badge">{course.mode}</span>
                </div>
              </div>

              <div className="card-bottom">
                <button className="explore-btns">Explore</button>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < allCoursesData.length && (
        <div className="load-more-container">
          <button
            onClick={loadMoreCourses}
            disabled={isLoading}
            className={`load-more-btn ${isLoading ? "loading" : ""}`}
          >
            {isLoading ? (
              <>
                <span className="loader"></span>
                Loading...
              </>
            ) : (
              "See More Courses"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
