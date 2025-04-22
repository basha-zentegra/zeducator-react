import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import MilestoneTracker from "./Milestone";
import { useContext } from "react";
// import { ScoreContext } from "./ScoreContext";
import { useState } from "react";
import CoursePageDescription from "./CoursePageDescription";
import { useEffect } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Tooltip } from 'bootstrap'; // 👈 this line fixes the error
import './CoursePage.css'

function CoursePage({ lessons, topics, onScoreUpdate, UpdateWatched={UpdateWatched}}) {


  // useEffect(() => {
  //   if (isZohoInitialized) {
  //     console.log("✅ SDK Ready in Child");
      
  //   }
  // }, [isZohoInitialized]);

  // import { Tooltip } from 'bootstrap';

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  
    return () => {
      // Cleanup tooltips when component unmounts
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, [lessons]); // Or whatever dynamic list updates tooltips



  
  const location = useLocation();
  const { product } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredLessons = lessons.filter(
    (lesson) => lesson.Our_Services?.display_value === product.Products
  );

  const allTopics = filteredLessons.flatMap((lesson) =>
    topics.filter((topic) => topic.CRM_Topics.display_value === lesson.Topic).reverse()
  );

  // const allTopics = allTopics1.reverse()
  

  console.log("all topics----->", allTopics)

  const watchedCount = allTopics.filter(topic => topic.Watched === "true").length;

  useEffect(() => {
    onScoreUpdate(watchedCount);
  }, [watchedCount, onScoreUpdate]);

  function calculatePercentage(totalTopics, watchedTopics) {
    if (totalTopics === 0) return 0; // To handle division by zero
    return Math.round((watchedTopics / totalTopics) * 100);
  }

  // Set selected lesson from the topic index
  const selectedLessonName = allTopics[selectedIndex]?.Lesson_Name || "Select a topic";
  const selectedLessonID = allTopics[selectedIndex]?.ID || "Noting";

  // const { score, increaseScore } = useContext(ScoreContext);
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    if (selectedIndex < allTopics.length - 1) {
      setSelectedIndex((prev) => prev + 1);
      
    }
  };

  if (!product) {
    return <h2>No product selected</h2>;
  }

  if (!UpdateWatched || typeof UpdateWatched !== "function") {
    console.error("❌ UpdateWatched function not passed properly");
  }

  // local storage 

  const markTopicAsWatched = (topicId) => {
    let watched = JSON.parse(localStorage.getItem("watchedTopics")) || [];
  
    if (!watched.includes(topicId)) {
      watched.push(topicId);
      localStorage.setItem("watchedTopics", JSON.stringify(watched));
    }
  };

  const isTopicWatched = (topicId) => {
    const watched = JSON.parse(localStorage.getItem("watchedTopics")) || [];
    return watched.includes(topicId);
  };

  // localStorage.removeItem("watchedTopics");

  


  return (
    <div className=" mt-1 d-flex ">
      <aside
        style={{
          height: "100vh",
          backgroundColor: "#9E9FC6",
          width: "300px",
          padding: "15px",
          position: "fixed",
          left: "0px",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#9E9FC6 #f1f1f1"
        }}
      >
        {/* <button onClick={() => UpdateWatched()}>UpdateWatched</button> */}
  

        <div
          className="bg-light ps-3 pe-3 pt-2 pb-2 rounded"
          style={{ width: "100%" }}
        >
          <h5>Zoho {product.Products}</h5>
          <div
            style={{ height: "10px" }}
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <motion.div className="progress-bar bg-success"
            initial={{ width: "0%" }} 
            animate={{ width: `${calculatePercentage(allTopics.length, watchedCount)}%` }}
            transition={{
              type: "spring",
              stiffness: 120,
              
            }}
            
            style={{ width: `${calculatePercentage(allTopics.length, watchedCount)}%` }}></motion.div>
          </div>
          <p style={{fontSize:"14px"}} className="fw-semibold">{calculatePercentage(allTopics.length, watchedCount)}% Completed</p>
        </div>
        <br />
        
        <div
          className="accordion accordion-flush rounded rounded"
          id="accordionFlushExample"
        >
          <div className="accordion-item rounded">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Lesson Title
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body p-1">
                <ul className="list-group  mx-auto">
                  {/* {console.log(lessons)} */}
                  {/* {console.log("toooopics", topics)} */}

                  {/* {console.log(
                    lessons.map((lesson) => lesson.Our_Services?.display_value)
                  )} */}

                  {lessons?.length > 0 ? (
                    lessons
                      .filter(
                        (lesson) =>
                          lesson.Our_Services?.display_value ===
                          product.Products
                      )
                      .map((lesson, index) => {
                        const matchingTopics = topics.filter(
                          (topic) =>
                            topic.CRM_Topics.display_value === lesson.Topic
                        );
                        console.log("--------------");
                        matchingTopics.map(m => console.log("m--",index));

                        return (
                          <div key={index} className="list-group-item p-1">
                            <div className="accordion" id={`accordion-${index}`}>
                              <div className="accordion-item">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse-${index}`}
                                    // aria-expanded="true"
                                    // data-bs-toggle="tooltip"
                                    aria-controls={`collapse-${index}`}
                                    data-bs-placement="right"
                                    title={lesson.Description}
                                    data-bs-custom-class="my-custom-tooltip"
                                  >
                                    {index+1}. {lesson.Topic}
                                  </button>
                                </h2>
                                <div
                                  id={`collapse-${index}`}
                                  className="accordion-collapse collapse"
                                  data-bs-parent={`#accordion-${index}`}
                                >
                                  <div className="accordion-body p-2">
                                   
                                      {matchingTopics.length > 0 ? (
                                        matchingTopics.reverse().map((topic) => {

                                          const globalIndex = allTopics.findIndex(t => t.ID === topic.ID);
                                          const canClick =
                                            globalIndex === 0 || isTopicWatched(allTopics[globalIndex - 1]?.ID);

                                            return (
                                          
                                          <div key={topic.ID} >
                                           
                                          <a
                                            style={{ 
                                              fontSize: "14px",
                                              fontWeight: "500",
                                              cursor: canClick ? "pointer" : "not-allowed",
                                              pointerEvents: canClick ? "auto" : "none",
                                              opacity: canClick ? 1 : 0.5,
                                            }}
                                            
                                            
                                            onClick={() => {
                                              // const globalIndex = allTopics.findIndex(t => t.ID === topic.ID); // assuming topic.ID is unique
                                              setSelectedIndex(globalIndex);
                                              
                                            }}
                                            className="d-flex  text-decoration-none text-black mb-2 mt-1"
                                          >
                                             {/* {topic.Watched === "true" ? (<span style={{fontSize:"20px"}}><i className="bi bi-check-circle me-2 text-success"></i> </span>) : (<span style={{fontSize:"20px"}}><i className="bi bi-check-circle me-2"></i> </span>)} */}
                                             {isTopicWatched(topic.ID) ? (<span style={{fontSize:"20px"}}><i className="bi bi-check-circle me-2 text-success"></i> </span>) : (<span style={{fontSize:"20px"}}><i className="bi bi-check-circle me-2"></i> </span>) }
                                             
                                             {topic.Lesson_Name}
                                             {/* <button className="btn btn-primary btn-sm" onClick={() => UpdateWatched(topic.ID)}>Mark Watched</button> */}
                                             {/* <button onClick={() => markTopicAsWatched(topic.ID)}>Done</button> */}
                                             {/* {isTopicWatched(topic.ID) && <span>✅</span>} */}

                                          </a>
                                          </div>
                                            );
                                          })
                                      ) : (
                                        <p style={{ fontSize: "14px" }}>
                                          No lesson names
                                        </p>
                                      )}
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                  ) : (
                    <p>No lessons available</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MilestoneTracker />
      </aside>

      <section style={{ width: "100%", padding: "20px", marginLeft: "300px" }}>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center text-white" style={{backgroundColor: "#6f2cf6"}}>
            <h5>{selectedIndex + 1}. {selectedLessonName}</h5>
            <button className="btn btn-primary" 
            onClick={ () => {
              handleButtonClick();
              markTopicAsWatched(selectedLessonID);
               }
             
              }>
              Next
            </button>
          </div>
          <div className="card-body d-flex justify-content-center">
          {/* <p><strong>Score:</strong> {watchedCount}</p> */}

            <ReactPlayer
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
              width="1152px"
              height="684px"
              url="https://www.youtube.com/watch?v=VBmq1HoGfaM"
              controls
            />
           
          </div>
          <div className="mx-3">
            <CoursePageDescription />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursePage;


