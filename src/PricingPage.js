import React from "react";
import { useLocation } from "react-router-dom";

function PricingPage() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center">
            <img
            src={`https://creatorapp.zoho.com${product.Cover_Pic}`}
            alt={product.Products}
            style={{ width: "150px", display: "block" }}
            />
            <h2 className=" ">{product.Products} Pricing</h2>
        </div>
      {product ? (
        <div class="row g-5">
          
          <div className="col-md-4">
                    <div className="card text-center shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
                            <h6 className="text-muted">Basic</h6>
                            <hr/>
                            <p className="text-secondary">{product.Products} Basic Package</p>
                            <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
                            <button className="btn btn-lg w-100 text-white mt-3" 
                                style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
                            <h6 className="text-muted">Intermediate</h6>
                            <hr/>
                            <p className="text-secondary">{product.Products} Basic Package</p>
                            <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
                            <button className="btn btn-lg w-100 text-white mt-3" 
                                style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
                            <h6 className="text-muted">Advance</h6>
                            <hr/>
                            <p className="text-secondary">{product.Products} Basic Package</p>
                            <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
                            <button className="btn btn-lg w-100 text-white mt-3" 
                                style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
}

export default PricingPage;



