import React from "react";
import MyCourse from "./MyCourse";
import CarouselComponent from "./CarouselComponent";
import HeroSection from "./HeroSection"


function Home( {courses} ) {
  return(
    <div>
      <CarouselComponent />
      {/* <HeroSection/> */}
      
      <div className="container">
        <MyCourse courses={courses} />
      </div>
    </div>

  );
}
export default Home;

// import React, { useEffect, useState, useContext } from "react";
// import ProductCard from "./ProductCard";
// import { ZohoContext } from "./ZohoProvider"; // Import context

// function Home() {
//   const { isZohoInitialized } = useContext(ZohoContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (!isZohoInitialized) {
//       console.log("Waiting for Zoho to initialize...");
//       return;
//     }

//     const Courses = {
//       appName: "zeducator",
//       reportName: "Our_Services_Report",
//     };

//     window.ZOHO.CREATOR.API.getAllRecords(Courses)
//       .then((CoursesResponse) => {
//         setProducts(CoursesResponse.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching records:", error);
//       });
//   }, [isZohoInitialized]); // Fetch only after Zoho is initialized

//   return (
//     <div className="container mt-3">
//       <div className="row g-5">
//         {products.length > 0 ? (
//           products.map((product, index) => <ProductCard key={index} product={product} />)
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
