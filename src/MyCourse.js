import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

function MyCourse({courses}){
    console.log("MyCourse - courses:", courses);
    return(
        <div className="container mt-3">
            
            <h1 className="text-center mt-2">My <span style={{color:"#702DF5 "}}> Space </span>  </h1> <br/> 
            
                <div className="row g-5 ">
                { courses && courses.length > 0 ? (
                courses.slice(0, 5).map((course, index) => (
                    <ProductCard key={index} product={course} />
                ))
                ) : (
                <p>Loading products...</p>
                )}
            </div>
           
        </div>
        
    );
}

export default MyCourse;