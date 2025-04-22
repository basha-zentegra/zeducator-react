import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 shadow-lg p-5 rounded-4" style={{ background: "#f9f9f9" }}>
          <h2 className="text-center mb-4 fw-bold" style={{color:"#6f2cf6"}}>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Subject</label>
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea rows="5" className="form-control" placeholder="Your Message"></textarea>
            </div>
            <div className="d-grid">
              <button style={{background:"#6f2cf6"}} type="submit" className="btn  btn-lg rounded-3 text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
