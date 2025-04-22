import React from "react";
import MyCourse from "./MyCourse";
import CarouselComponent from "./CarouselComponent";
import HeroSection from "./HeroSection"
import NextButton from "./NextButton"
import { motion } from "framer-motion";
import './Home.css'
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

function Home( {courses, lessons, topics} ) {
  return(
    <div>
      <CarouselComponent />
      {/* <HeroSection/> */}
      
      <div className="container" style={{height:"90vh"}}>
        <MyCourse courses={courses} lessons={lessons} topics={topics}  />
      </div>
      <div className="mb-5 d-flex justify-content-evenly" style={{backgroundColor:"#7e46f0", height:"50vh"}}>

        <motion.div 
          initial={{ opacity: 0 , scale: 0}}
          whileInView={{ opacity: 1, x: 100, scale: 1 }}
          transition={{delay: 0.3, type:"spring", stiffness:"300"}}
          
          className="text-center my-auto">
          <h3 className="text-white">Learn More With </h3>
          <h1 className="text-white" style={{fontSize:"80px"}}>Zeducator</h1><br/>
          <center><NextButton /></center>
        </motion.div>

        <div>
          <motion.img

            initial={{scale:1}}

            whileInView={{scale:1.5}}
            transition={{type:"spring", stiffness:300, delay:0.2}}
           src="https://zbooksmigration.com/wp-content/uploads/2025/04/Untitled-design-1.png" style={{width:"350px", height:"auto", position: "relative", top:"30px"}} />
        </div>

      </div>
      <div className="" style={{height:"5vh"}}>

      </div>
      <div className="" style={{background:"#F6F7F9", paddingLeft:"150px", paddingRight:"150px"}}>

            <section className="p-5">
              <div className="row d-flex justify-content-center ">
                <div className="col-md-10 col-xl-8 text-center">
                  <h1 className="mb-4 py-5">See How Learning Sparks <span style={{color:"#6f2cf6"}}>Success Stories</span> </h1>
                  {/* <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam eum porro a pariatur veniam.
                  </p> */}
                </div>
              </div>
              <Marquee gradient={true} gradientWidth={60} speed={30} pauseOnHover={true} >
              <div className="row text-center d-flex align-items-stretch g-5 ">
                <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{width:"18rem"}}>
                  <div className="card testimonial-card" >
                    <div className="card-up" style={{ backgroundColor: "#9d789b" }}></div>
                    <div className="avatar mx-auto bg-white">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        className="rounded-circle img-fluid"
                        alt="Maria Smantha"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="mb-4">Ann Mariya</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet eos adipisci,
                        consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{width:"18rem"}}>
                  <div className="card testimonial-card" >
                    <div className="card-up" style={{ backgroundColor: "#7a81a8" }}></div>
                    <div className="avatar mx-auto bg-white">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                        className="rounded-circle img-fluid"
                        alt="Lisa Cudrow"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="mb-4">Namartha</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
                        repudi mollitia architecto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-0 d-flex align-items-stretch" style={{width:"18rem"}}>
                  <div className="card testimonial-card" >
                    <div className="card-up" style={{ backgroundColor: "#6d5b98" }}></div>
                    <div className="avatar mx-auto bg-white">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                        className="rounded-circle img-fluid"
                        alt="John Smith"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="mb-4">Mallan Gouda</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fas fa-quote-left pe-2"></i>Delectus impedit saepe officiis ab
                        aliquam repellat rem unde ducimus.
                      </p>
                    </div>
                    
                  </div>
                </div>

                <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" style={{width:"18rem"}}>
                  <div className="card testimonial-card" >
                    <div className="card-up" style={{ backgroundColor: "#7a81a8" }}></div>
                    <div className="avatar mx-auto bg-white">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                        className="rounded-circle img-fluid"
                        alt="Lisa Cudrow"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="mb-4">Deesha</h4>
                      <hr />
                      <p className="dark-grey-text mt-4">
                        <i className="fas fa-quote-left pe-2"></i>Neque cupiditate assumenda in maiores
                        repudi mollitia architecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Marquee>
            </section>


        
      </div>
                    {/* FAQ  */}
      <div className="py-5" style={{ display:"grid", placeContent:"center" , backgroundColor:"#ffefc2" }} >
        {/* <motion.img
        
        whileInView={{ x:1100, y:300}}
        transition={{type:"spring"}}
        
        style={{position:"absolute"}}
         src="https://cdn-icons-png.flaticon.com/128/4403/4403284.png" /> */}
        <h1 className="text-center py-1" style={{fontSize:"50px"}}>FA<span style={{color:"#6f2cf6"}}>Q</span>?</h1>

        <section className="p-5 my-3" style={{width:"700px", border:"2px solid ", height:"35rem", borderRadius:"40px", background:"white"}}>
          
        <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     What is the Duration of this Course?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Certificate is free?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Will you Provide Doubt Clearing Session..
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>

        </section>

      </div>
      <Footer />
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
