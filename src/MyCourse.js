import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

function MyCourse({courses, lessons, topics}){
    // console.log("MyCourse - courses:", courses);
    const MyCourse = courses.filter(c =>
        c.Purchased === "true"
    );
    return(
        <div className="container mt-3 mb-5 pb-5">
            
            <h1 className="text-center my-4">My <span style={{color:"#702DF5 "}}> Space </span>  </h1> <br/> 
            
                <div className="row g-5 ">
                { MyCourse && MyCourse.length > 0 ? (
                MyCourse.map((course, index) => (
                    
                    <ProductCard key={index} product={course} lessons={lessons} topics={topics} />
                ))
                ) : (
                <p>Loading products...</p>
                )}
            </div>
           
        </div>
        
    );
}

export default MyCourse;