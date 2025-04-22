import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product , lessons, topics }) {

  const filteredLessons = lessons.filter(
    (lesson) => lesson.Our_Services?.display_value === product.Products
  );

  const allTopics = filteredLessons.flatMap((lesson) =>
    topics.filter((topic) => topic.CRM_Topics.display_value === lesson.Topic)
  );
  
  const watchedCount = allTopics.filter(topic => topic.Watched === "true").length;

  // console.log(filteredLessons.length, allTopics.length, watchedCount,"----")

  function calculatePercentage(totalTopics, watchedTopics) {
    if (totalTopics === 0) return 0; // To handle division by zero
    return Math.round((watchedTopics / totalTopics) * 100);
  }

    const navigate = useNavigate();

  const handleClick = (lessons) => {
    navigate("/course", { state: { product, lessons } }); // Pass product data to CoursePage
  };
    return (
      <motion.div 
      // whileHover={{scale:1.05, borderColor:"green"}}
      // transition={{type:'spring', stiffness:'300'}}
      
      className="col-md-3  ">
        <motion.div 

            whileHover={{scale:1.05, borderColor:"#6f2cf6" , borderWidth:"3px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
            transition={{type:'spring', stiffness:'300'}}

          className="card h-100 d-flex flex-column">
          
          <a href="#"  onClick={(e) => { e.preventDefault(); handleClick(lessons); }}>
            <img
              src={`https://creatorapp.zoho.com${product.Cover_Pic}`} // Render image dynamically
              style={{ width: "200px" }}
              className="card-img-top mx-auto d-block"
              alt={product.Products}
            />
          </a>
          <div className="card-body flex-grow-1">
            <h6 className="card-title">{product.Products}</h6> {/* Render product name */}
            <p className="m-0">{allTopics.length} Videos
            </p>
            <div className="d-flex align-items-center gap-1 rating">
              <h6 style={{ color: "rgb(163, 124, 25)" }} className="m-0">4.7</h6>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="text-muted">(31,154)</span>
            </div>
            {/* percentage watched  */}
            <div className="pt-3">
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
          <p className="text-center">{calculatePercentage(allTopics.length, watchedCount)}% Completed</p>

            </div>
            
            
          </div>

          
          
        </motion.div>
        <div>

        </div>
      </motion.div>
    );
  }
  
export default ProductCard;
  