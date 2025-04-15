import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CoursePage from "./CoursePage";
import UserProfile from "./UserProfile";
import LessonList from "./LessonList";
import CourseList from "./CourseList";

import { useContext } from "react";
// import { ScoreContext, ScoreProvider } from "./ScoreContext";
import MyCourse from "./MyCourse";
import PricingPage from "./PricingPage";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const [isZohoInitialized, setIsZohoInitialized] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);

  // const { score } = useContext(ScoreContext); 

  // Score
  const [totalScore, setTotalScore] = useState(0);

  const handleScoreUpdate = (score) => {
    setTotalScore(score);
  };
  const showScoreButton = location.pathname === "/course"; // Adjust this to your actual route

  useEffect(() => {
    if (window.ZOHO) {
      console.log("⏳ Initializing Zoho...");
      window.ZOHO.CREATOR.init()
        .then(() => {
          console.log("✅ Zoho Creator Initialized Successfully");
          setIsZohoInitialized(true);
        })
        .catch((error) => console.error("❌ Zoho Initialization Failed:", error));
    } else {
      console.error("❌ Zoho Creator SDK not loaded.");
    }
  }, [location.pathname]);
  
  useEffect(() => {
    if (isZohoInitialized) {
      console.log("🚀 Fetching reports...");
      fetchReports();
    }
  }, [isZohoInitialized]);  // <-- Trigger only when initialized
  

  const fetchReports = () => {
    console.log("📡 Fetching lessons & profiles...");
  
    // Fetch Lessons
    const TopicConfig = { 
        appName: "zeducator",
        reportName: "All_Crm_Topics" 
      };
      
    window.ZOHO.CREATOR.API.getAllRecords(TopicConfig)
      .then((response) => {
        console.log("✅ Lessons Response:", response);
        setLessons(response?.data.reverse() || []);
      })
      .catch((error) => console.error("❌ Error Fetching Lessons:", error));

      const SubTopicConfig = { 
        appName: "zeducator",
        reportName: "Course_Curriculam_Report" 
      };
    window.ZOHO.CREATOR.API.getAllRecords(SubTopicConfig)
      .then((response) => {
        console.log("✅ Sub Topics:", response);
        setTopics(response?.data || []);
      })
      .catch((error) => console.error("❌ Error Fetching Lessons:", error));
  
    // Fetch User Profiles
    const ProfileConfig = { 
      appName: "zeducator", 
      reportName: "All_Profiles" 
    };

    window.ZOHO.CREATOR.API.getAllRecords(ProfileConfig)
      .then((response) => {
        console.log("✅ Profiles Response:", response);
        setProfiles(response?.data || []);
      })
      .catch((error) => console.error("❌ Error Fetching Profiles:", error));

    // Fetch all Courses
    const CourseConfig ={
      appName: "zeducator",
      reportName: "Our_Services_Report"
    };

    window.ZOHO.CREATOR.API.getAllRecords(CourseConfig)
      .then((response) => {
        console.log("✅ Course Response:", response);
        setCourses(response?.data || []);
      })
      .catch((error) => console.error("❌ Error Fetching Courses:", error))
   


  };
    const UpdateWatched = (recordId) =>{
    
          var formData = {
            "data" : {
              "Watched": false 
            }
          }

          
        
          console.log("goinggggggg....... to update.............")
          // Fetch all Courses
        const scoreUpdateConfig ={
            appName: "zeducator",
            reportName: "Course_Curriculam_Report",
            id : recordId,
            data : formData 
        };

        if (window.ZOHO && isZohoInitialized) {
          try {
            window.ZOHO.CREATOR.API.updateRecord(scoreUpdateConfig)
              .then((res) => {
                if (res.code === 3000) {
                  console.log("✅ Record updated");
                } else {
                  console.warn("⚠️ Unexpected response", res);
                }
              })
              .catch((err) => {
                if (err.message?.includes("UnAuthorized Source")) {
                  alert("❌ This page is not authorized to use Zoho API. Please contact admin.");
                }
                console.error("❌ Update Error:", err);
              });
          } catch (err) {
            console.error("❌ Unexpected error:", err);
          }
        }
        
    
        // if (window.ZOHO && isZohoInitialized) {
        //   window.ZOHO.CREATOR.API.updateRecord(scoreUpdateConfig)
        //     .then((res) => console.log("✅ Updated:", res))
        //     .catch((err) => console.error("❌ Update Error:", err));
        // } else {
        //   console.error("❌ ZOHO not initialized yet");
        // }


    
      };

      const triggerUpdateWatched =() =>{
        const recordId = "4717578000000148063";
        UpdateWatched(recordId);
      };

  
  

  return (
    
      <div>
        <nav style={{ 
          padding: "10px 20px", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          backgroundColor: "#6F2CF6", 
          position: "fixed", 
          top: "0", 
          left: "0", 
          width: "100%", 
          zIndex: "1000", 
          height: "60px", 
          color: "white"
          }}>
            <div className="d-flex align-items-center gap-4">
              <a><img style={{ width: "150px" }} src="https://www.zentegra.com/Zentgera%20Final%20Version.PNG" alt="Logo" /></a>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/profile">Profile</Link>
              <Link className="nav-link" to="/courses">All Course</Link>        
              <button  disabled={!isZohoInitialized} onClick={() => triggerUpdateWatched()}>UpdateWatched</button>
            </div>
          
            
            {showScoreButton && (
            <button className="btn btn-light" style={{ 
              padding: "8px 15px", 
              fontSize: "16px", 
              fontWeight: "bold", 
              borderRadius: "5px",
              color:"#6F2CF6"
            }}>
              Score: {totalScore}
            </button>
          )}
        </nav>

        <div style={{ paddingTop: "55px" }}>
          <Routes>
            <Route path="/" element={<Home courses={courses} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course" element={<CoursePage lessons={lessons} topics={topics} onScoreUpdate={handleScoreUpdate} isZohoInitialized={isZohoInitialized}  UpdateWatched={UpdateWatched}/>} />
            <Route path="/profile" element={<UserProfile profiles={profiles} />} />
            <Route path="/lessons" element={<LessonList lessons={lessons} />} />
            <Route path="/courses" element={<CourseList courses={courses} lessons={lessons}/>} />
            <Route path="/my-courses"  element={<MyCourse courses={courses} />} /> 
            <Route path="/pricing"  element={<PricingPage/>} /> 
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
