import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaClock,
  FaLaptop,
  FaUniversity,
  FaGraduationCap,
  FaRegCalendarCheck,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaChalkboard,
  FaUserTie,
  FaMicrophone,
  FaShieldAlt,
  FaTrain,
  FaCertificate,
} from "react-icons/fa";
import "./Courses.css";
import img from "../../img/course.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  // Online course data
  const onlineCourses = [
    {
      id: 1,
      title: "UPSC Foundation",
      subtitle: "Prelims + Mains Batch 2025",
      features: ["Comprehensive Study Plan", "Current Affairs", "Test Series"],
      fullTitle: "UPSC Prelims + Mains Foundation Batch 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Online",
      icon: <FaUniversity className="co-course-icon" />,
      comingSoon: true,
    },
    {
      id: 2,
      title: "JPSC Mains Crash Course",
      subtitle: "Intensive Revision Batch 2025",
      features: ["Answer Writing Practice", "Mock Tests", "Conceptual Clarity"],
      fullTitle: "JPSC Mains Intensive Revision Batch 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Online",
      icon: <FaBook className="co-course-icon" />,
      comingSoon: true,
    },
    // Add more online courses with comingSoon: true
  ];

  // Offline course data
  const offlineCourses = [
    {
      id: 101,
      title: "UPSC Offline",
      subtitle: "Classroom Program 2025",
      features: ["Daily Classes", "Study Material", "Test Series"],
      fullTitle: "UPSC Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaUniversity className="co-course-icon" />,
    },
    {
      id: 102,
      title: "JPSC Offline",
      subtitle: "Classroom Program 2025",
      features: ["Expert Faculty", "Current Affairs", "Answer Writing"],
      fullTitle: "JPSC Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaBook className="co-course-icon" />,
    },
    {
      id: 103,
      title: "BPSC Offline",
      subtitle: "Classroom Program 2025",
      features: ["GS Classes", "Optional Subject", "Test Series"],
      fullTitle: "BPSC Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaGraduationCap className="co-course-icon" />,
    },
    {
      id: 104,
      title: "BSSC CGL Offline",
      subtitle: "Classroom Program 2025",
      features: ["Quant Classes", "Reasoning", "General Awareness"],
      fullTitle: "BSSC CGL Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaChalkboardTeacher className="co-course-icon" />,
    },
    {
      id: 105,
      title: "Banking PO Offline",
      subtitle: "Classroom Program 2025",
      features: ["Quantitative Aptitude", "Reasoning", "English"],
      fullTitle: "Banking PO Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaUserTie className="co-course-icon" />,
    },
    {
      id: 106,
      title: "Banking Clerk Offline",
      subtitle: "Classroom Program 2025",
      features: ["Speed Maths", "Computer Awareness", "Mock Tests"],
      fullTitle: "Banking Clerk Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaChalkboard className="co-course-icon" />,
    },
    {
      id: 107,
      title: "SSC CGL Offline",
      subtitle: "Classroom Program 2025",
      features: ["General Intelligence", "Quantitative Aptitude", "English"],
      fullTitle: "SSC CGL Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaCertificate className="co-course-icon" />,
    },
    {
      id: 108,
      title: "Railway NTPC Offline",
      subtitle: "Classroom Program 2025",
      features: ["Mathematics", "General Awareness", "Practice Tests"],
      fullTitle: "Railway NTPC Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaTrain className="co-course-icon" />,
    },
    {
      id: 109,
      title: "Bihar Police Offline",
      subtitle: "Classroom Program 2025",
      features: ["General Studies", "Reasoning", "Physical Test Prep"],
      fullTitle: "Bihar Police Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaShieldAlt className="co-course-icon" />,
    },
    {
      id: 110,
      title: "Spoken English Offline",
      subtitle: "Classroom Program 2025",
      features: ["Grammar", "Conversation", "Personality Development"],
      fullTitle: "Spoken English Classroom Program 2025",
      startDate: "class start soon",
      endDate: "",
      mode: "Offline",
      icon: <FaMicrophone className="co-course-icon" />,
    },
  ];

  const allCoursesData = [...offlineCourses, ...onlineCourses];

  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState(allCoursesData.slice(0, 6));
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const loadMoreCourses = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newCount = visibleCount + 3;
      setVisibleCount(newCount);
      setCourses(allCoursesData.slice(0, newCount));
      setIsLoading(false);
    }, 1000);
  };

  const filteredCourses = allCoursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "all" ||
      course.mode.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  return (
    <div className="co-courses-page">
      {/* Header Section */}
      <div className="co-courses-header">
        <img src={img} alt="Courses Banner" className="co-header-image" />

        <div className="co-header-content">
          <h1>Explore Our Courses</h1>
          <p>
            Over 10 million learners trust us for Online and Offline Coaching
          </p>

          <div className="co-search-bar">
            <FaSearch className="co-search-icon" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="co-filter-tabs">
          <button
            className={activeFilter === "all" ? "co-active" : ""}
            onClick={() => setActiveFilter("all")}
          >
            <FaFilter /> All Courses
          </button>
          <button
            className={activeFilter === "online" ? "co-active" : ""}
            onClick={() => setActiveFilter("online")}
          >
            <FaLaptop /> Online Courses
          </button>
          <button
            className={activeFilter === "offline" ? "co-active" : ""}
            onClick={() => setActiveFilter("offline")}
          >
            <FaUniversity /> Offline Courses
          </button>
        </div>
      </div>

      {/* Course Count */}
      <div className="co-course-count">
        <span>Total Courses: {filteredCourses.length}</span>
        <span>
          Showing: {Math.min(displayedCourses.length, visibleCount)} of{" "}
          {filteredCourses.length} courses
        </span>
      </div>

      {/* Courses Grid */}
      <div className={`co-courses-container ${isLoading ? "co-loading" : ""}`}>
        <div className="co-courses-grid">
          {displayedCourses.map((course) => (
            <div key={course.id} className="co-course-card">
              {course.comingSoon && (
                <div className="co-coming-soon-banner">
                  Online Classes Starting Soon!
                </div>
              )}
              <div className="co-card-icon">{course.icon}</div>

              <div className="co-card-top">
                <h3>{course.title}</h3>
                <p className="co-subtitle">{course.subtitle}</p>
              </div>

              <div className="co-card-middle">
                <div className="co-features">
                  {course.features.map((feature, index) => (
                    <div key={index} className="co-feature-item">
                      <FaArrowRight className="co-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="co-timing">
                  <div className="co-timing-item">
                    <FaCalendarAlt className="co-timing-icon" />
                    <span>
                      <strong>Starts:</strong> {course.startDate}
                    </span>
                  </div>
                </div>

                <div className="co-mode-badge">
                  {course.mode === "Online" ? (
                    <FaLaptop className="co-mode-icon" />
                  ) : (
                    <FaUniversity className="co-mode-icon" />
                  )}
                  <span>{course.mode}</span>
                </div>
              </div>

              <div className="co-card-bottom">
                <button
                  className="co-explore-btn"
                  onClick={() =>
                    navigate("/register", {
                      state: { scrollTo: "reg" },
                    })
                  }
                >
                  Register Now <FaArrowRight className="co-btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredCourses.length && (
        <div className="co-load-more-container">
          <button
            onClick={loadMoreCourses}
            disabled={isLoading}
            className={`co-load-more-btn ${isLoading ? "co-loading" : ""}`}
          >
            {isLoading ? (
              <>
                <span className="co-loader"></span>
                Loading...
              </>
            ) : (
              "Load More Courses"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
