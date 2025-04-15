import React from "react";
import './App.css'
import { Typewriter } from 'react-simple-typewriter'

function CarouselComponent() {
  return (
   <div id="hero" className="text-center d-flex justify-content-center align-items-center">
    <div>
      <h1 style={{fontSize:"40px"}}>Unlock Your Potential </h1>
      <h1 style={{fontSize:"80px"}}>Learn  <span style={{color:"#702DF5 "}} ><Typewriter words={['Anything', 'Anytime', 'Anywhere']}
       loop={0} 
       cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
      /></span> </h1>
      <br/>

      <h4>With <span style={{color:"#702DF5 "}}>Zeducator</span></h4>
      
      
    </div>
   </div>
  );
}

export default CarouselComponent;


<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner" style={{height:"100vh"}}>
  <div className="carousel-item active">
    <img src="https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_1280.jpg" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2022/01/22/03/58/online-school-6956162_640.jpg" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2020/05/13/13/32/video-conference-5167472_640.jpg" className="d-block w-100" alt="..." />
  </div>
</div>
<button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExample"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#carouselExample"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>