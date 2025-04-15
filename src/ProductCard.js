import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product , lessons}) {

    const navigate = useNavigate();

  const handleClick = (lessons) => {
    navigate("/course", { state: { product, lessons } }); // Pass product data to CoursePage
  };
    return (
      <motion.div 
      whileHover={{scale:1.1}}
      className="col-md-3">
        <div className="card h-100 d-flex flex-column">
          <a href="#"  onClick={(e) => { e.preventDefault(); handleClick(lessons); }}>
            <img
              src={`https://creatorapp.zoho.com${product.Cover_Pic}`} // Render image dynamically
              style={{ width: "250px" }}
              className="card-img-top"
              alt={product.Products}
            />
          </a>
          <div className="card-body flex-grow-1">
            <h6 className="card-title">{product.Products}</h6> {/* Render product name */}
            <p className="m-0">20 Videos</p>
            <div className="d-flex align-items-center gap-1 rating">
              <h6 style={{ color: "rgb(163, 124, 25)" }} className="m-0">4.7</h6>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="text-muted">(31,154)</span>
            </div>
            <h6>
              ₹599{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "grey",
                  fontWeight: 100,
                }}
              >
                ₹3,999
              </span>
            </h6>
            <button
              className="btn btn-sm text-white d-flex align-items-center gap-1"
              style={{
                background: "linear-gradient(45deg, #9733EE, #DA22FF)",
                height: "30px",
              }}
            >
              <i className="bi bi-award"></i> Premium
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
  
  export default ProductCard;
  