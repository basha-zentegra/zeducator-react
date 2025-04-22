import React, { useState } from "react";

function MilestoneTracker() {
  const milestones = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7" ];
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <div className="container mt-4 bg-light rounded p-3">
      <h5>7 Days Challange</h5> <hr />
      <div className="d-flex flex-column align-items-start position-relative">
        {/* Vertical Line */}
        <div className="position-absolute start-1 top-0 bottom-0 border-primary border-3 bg-dark d-none" style={{ left: "25px", width:"2px"}}></div>

        {milestones.map((milestone, index) => (
          <div key={index} className="d-flex align-items-center mb-3" onClick={() => setActiveMilestone(index)} style={{ cursor: "pointer" }}>
            {/* Circle Indicator */}
            <div className={`rounded-circle d-flex align-items-center justify-content-center me-3`} 
                 style={{
                   width: "30px",
                   height: "30px",
                   background: activeMilestone === index ? "#007bff" : "#ccc",
                   color: "white",
                   fontWeight: "bold",
                   zIndex: "1"
                 }}>
              {index + 1}
              
            </div>

            {/* Milestone Text */}
            <span className={activeMilestone === index ? "fw-bold text-primary" : "text-secondary"}>
              {milestone}
              <p style={{fontSize:"13px", fontWeight:"400"}} className="mb-0"><i className="bi bi-camera-video"></i> VIDEO</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestoneTracker;
