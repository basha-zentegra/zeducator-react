import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProfileModal( {profiles} ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button (Profile Icon or anything) */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn text-white"
      >
         {profiles.map((n, i) => (
                        <motion.img 
        
                          initial={{opacity:0}}
                          animate={{opacity:1}}
                          whileHover={{scale:1.3}}
                          transition={{type:"spring", stiffness:300, duration: Infinity}}
                          key={i}
                          src={`https://creatorapp.zoho.com${n.photo}`}
                          alt={`Profile ${i}`}
                          style={{ width: "30px", height: "30px" , borderRadius:"50px"}}
                        />
                      ))}
        
                      <p style={{fontSize:"12px"}} className="m-0 p-0 fw-semibold text-center">{profiles.map(n => n.Name)}</p>
        
      
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 300, duration:10 }}
            
            className="modal-backdrop"
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="modal-content p-4 rounded"
              style={{ background: "#fff", width:"50vw"  }}
            >
              {/* old content  */}



              {profiles.length === 0 ? (
                <p>Loading...</p>
              ) : (
                profiles.map((user, index) => (
              
                
                  <motion.div 

                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 100, duration:2 }}

                    className="card shadow-lg border-0 rounded-4 p-4">
                      <div className="text-center">
                          <img src={`https://creatorapp.zoho.com${user.photo}`} className="rounded-circle border" style={{width:"150px"}} alt="Profile Photo"/>
                          <h3 className="mt-3 fw-bold">{user.Name}</h3>
                          <p className="text-muted">{user.Email}</p>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-md-6">
                              <p><strong>Phone:</strong> {user.Phone_Number}</p>
                              <p><strong>Mobile:</strong> {user.Mobile}</p>
                              <p><strong>Gender:</strong> {user.Gender}</p>
                              <p><strong>Status:</strong> {user.Status}</p>
                              <p><strong>Type:</strong> {user.Type_field}</p>
                          </div>
                          <div className="col-md-6">
                              <p><strong>Company Name:</strong> {user.Company_Name}</p>
                              <p><strong>Street:</strong> {user.Street}</p>
                              <p><strong>City:</strong> {user.City}</p>
                              <p><strong>State:</strong> {user.State}</p>
                              <p><strong>Country:</strong> {user.Country}</p>
                              <p><strong>Zip Code:</strong> {user.zip}</p>
                          </div>
                      </div>
                      <div className="position-absolute top-5 end-0 me-4">
                      <button className="btn btn-outline-danger btn-sm">Logout <i class="bi bi-box-arrow-right"></i></button>
                      </div>
                          
                    </motion.div>
                
                ))
              )}
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
