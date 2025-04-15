import React from "react";

import{ useEffect } from "react";

function About() {

  useEffect(() => {
    if (window.ZOHO) {
      console.log("⏳ Initializing Zoho...");
      window.ZOHO.CREATOR.init()
        .then(() => {
          console.log("✅ Zoho Creator Initialized Successfully in the About Page....!!!!!!");
          
        })
        .catch((error) => console.error("❌ Zoho Initialization Failed in About page......:", error));
    } else {
      console.error("❌ Zoho Creator SDK not loaded About Page....!!!!");
    }
  }, []);

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

  // if (window.ZOHO && isZohoInitialized) {
  //   try {
  //     window.ZOHO.CREATOR.API.updateRecord(scoreUpdateConfig)
  //       .then((res) => {
  //         if (res.code === 3000) {
  //           console.log("✅ Record updated");
  //         } else {
  //           console.warn("⚠️ Unexpected response", res);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.message?.includes("UnAuthorized Source")) {
  //           alert("❌ This page is not authorized to use Zoho API. Please contact admin.");
  //         }
  //         console.error("❌ Update Error:", err);
  //       });
  //   } catch (err) {
  //     console.error("❌ Unexpected error:", err);
  //   }
  // }
  

    window.ZOHO.CREATOR.API.updateRecord(scoreUpdateConfig)
      .then((res) => console.log("✅ Updated:", res))
      .catch((err) => console.error("❌ Update Error:", err));

  



};

const triggerUpdateWatched =() =>{
  const recordId = "4717578000000148063";
  UpdateWatched(recordId);
};






  return(
    <div>
      <h1>About Page</h1>
      <button  onClick={() => triggerUpdateWatched()}>UpdateWatched</button>
    </div>
  );
}
export default About;
