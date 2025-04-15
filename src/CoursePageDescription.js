import React from "react";
import './CoursePageDescription.css'

function CoursePageDescription(){

    return(
        <section>

        <div className="d-flex justify-content-around">
            <div className="description">
                <div className="card border-secondary mb-3" >
                    <div className="card-header text-white fw-bold" style={{backgroundColor: "#6f2cf6"}}>Description</div>
                    <div className="card-body text-secondary">
                      
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
                      </p>
                    </div>
                  </div>
            </div>
            <div className="rel-links">
                <div className="card border-secondary mb-3" >
                    <div className="card-header text-white fw-bold" style={{backgroundColor: "#6f2cf6"}}>Related Links</div>
                    <div className="card-body text-secondary">
                      
                      
                        <ul className="card-text">
                            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                            <li>Some quick example text to build on the card title and make up the bulk of the card's content.</li>
                        </ul>
                      
                    </div>
                  </div>
            </div>
        </div>
        
     
        
        <div>
          <div className="card mt-4">
            <div className="card-header text-center text-white fw-bold" style={{backgroundColor: "#6f2cf6"}}>Action Section</div>
            <div className="card-body">
                <ul className="nav nav-tabs" id="taskTabs" role="tablist">
                    <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#subtasks">PPT</button></li>
                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#logs">Assignment</button></li>
                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#notes">Blog</button></li>
                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#files">Details</button></li>
                    <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#checklist">Others</button></li>
                </ul>
                <div className="tab-content mt-3">
                    
                    <div className="tab-pane fade active" id="subtasks" >
                        ppt 
                    </div>
                    
                    <div className="tab-pane fade" id="logs">
                        <div className="test-form border border-dark">
                            <h5>Assignment</h5>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="notes">
                        Blog Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate similique doloribus excepturi enim nemo! Accusantium nisi officia corporis nostrum omnis, culpa nemo pariatur ipsam odit repellendus quam a voluptas et consectetur perferendis animi sit incidunt aliquid provident vero aliquam? Consequuntur voluptatum ipsa omnis explicabo culpa. Corporis maiores et dolor cupiditate. 
                    </div>
                    <div className="tab-pane fade" id="files">
                        Details Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam earum perferendis, magnam perspiciatis quos pariatur a fugit deleniti, ex blanditiis nam, dolore necessitatibus vel. Quasi ad illum consequatur neque quae. Velit consequatur sed ea totam qui cum nihil magni, quas non praesentium enim esse sunt tempora hic voluptas, soluta temporibus culpa dolore labore quaerat blanditiis perferendis dolor laborum est.
                    </div>
                    <div className="tab-pane fade" id="checklist">
                        Others Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, neque nemo ratione obcaecati facere earum rerum eaque, eligendi labore dolorum impedit explicabo ducimus molestias maxime, et officiis quas minus soluta.
                    </div>
                    
                 
                </div>
            </div>
         </div>
        </div>


        
    </section>

    );

}

export default CoursePageDescription;