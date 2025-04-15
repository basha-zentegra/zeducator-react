import React from "react";
import ProductCard from "./ProductCard";
import MyCourse from "./MyCourse";
import ProductCardAllCourses from "./ProductCardAllCourses";

const CourseList = ({ courses = [], lessons = [] }) => {
    return (
        <div className="container mt-3">
          
          <div className="row g-5">
            {courses.length > 0 ? (
              courses.map((course, index) => <ProductCardAllCourses key={index} product={course} lessons={lessons} />)
            ) : (
              <p>Loading products...</p>
            )}
          </div>
          
        </div>
      );

};

export default CourseList;

