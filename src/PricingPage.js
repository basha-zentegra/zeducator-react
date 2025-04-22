import React from "react";
import { useLocation } from "react-router-dom";

function PricingPage({ membership }) {
  const location = useLocation();
  const { product } = location.state || {};

//   console.log("pricing page -->", membership, product.Products)

  const currentProductPricing = membership.filter(p =>
    p.Our_Services.display_value === product.Products
  );

//   console.log("Current pricing page -->",currentProductPricing)

  return (
    <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center">
        
            <h2 className="mb-5">Zoho {product.Products} Pricing</h2>
        </div>
      {product ? (
        <div className="row g-5 ">
            {currentProductPricing.length > 0 ? (

                currentProductPricing.reverse().map((p, index) => 

                    <div className="col-md-4" key={index}>
                        <div className="card text-center shadow-lg border-0 rounded-4">
                                <img
                                    src={`https://creatorapp.zoho.com${product.Cover_Pic}`}
                                    alt={p.Our_Services.display_value}
                                    style={{ width: "200px", display: "block" }}
                                    className="card-img-top mx-auto d-block"
                                />

                            <div className="card-body p-4">
                                <h3 className="card-title fw-bold text-primary">{p.Our_Services.display_value}</h3>
                                <h6 className="text-muted">{p.Type_field}</h6>
                                <hr/>
                                <p className="text-secondary"> {p.Features_field}</p>
                                <h2 className="fw-bold">{p.Price}<span className="fs-6 text-muted">/{p.Duration}</span></h2>
                                <button className="btn btn-lg w-100 text-white mt-3" 
                                    style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    

                )

            ) : (
                <p>No Data Available</p>
            )}

                
                
                
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
}

export default PricingPage;


// return (
//     <div className="container mt-5">
//         <div className="d-flex justify-content-center align-items-center">
        
//             <h2 className=" ">{product.Products} Pricing</h2>
//         </div>
//       {product ? (
//         <div class="row g-5 ">
          
//           <div className="col-md-4">
//                     <div className="card text-center shadow-lg border-0 rounded-4">
//                     <img
//                             src={`https://creatorapp.zoho.com${product.Cover_Pic}`}
//                             alt={product.Products}
//                             style={{ width: "200px", display: "block" }}
//                             className="card-img-top mx-auto d-block"
//                             />

//                         <div className="card-body p-4">
//                             <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
//                             <h6 className="text-muted">Basic</h6>
//                             <hr/>
//                             <p className="text-secondary">{product.Products} Basic Package</p>
//                             <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
//                             <button className="btn btn-lg w-100 text-white mt-3" 
//                                 style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
//                                 Get Started
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <div className="card text-center shadow-lg border-0 rounded-4">
//                     <img
//                             src={`https://creatorapp.zoho.com${product.Cover_Pic}`}
//                             alt={product.Products}
//                             style={{ width: "200px", display: "block" }}
//                             className="card-img-top mx-auto d-block"
//                             />
//                         <div className="card-body p-4">
//                             <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
//                             <h6 className="text-muted">Intermediate</h6>
//                             <hr/>
//                             <p className="text-secondary">{product.Products} Basic Package</p>
//                             <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
//                             <button className="btn btn-lg w-100 text-white mt-3" 
//                                 style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
//                                 Get Started
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4">
//                     <div className="card text-center shadow-lg border-0 rounded-4">
//                     <img
//                             src={`https://creatorapp.zoho.com${product.Cover_Pic}`}
//                             alt={product.Products}
//                             style={{ width: "200px", display: "block" }}
//                             className="card-img-top mx-auto d-block"
//                             />
//                         <div className="card-body p-4">
//                             <h3 className="card-title fw-bold text-primary">{product.Products}</h3>
//                             <h6 className="text-muted">Advance</h6>
//                             <hr/>
//                             <p className="text-secondary">{product.Products} Basic Package</p>
//                             <h2 className="fw-bold">$100.00<span className="fs-6 text-muted">/30 days</span></h2>
//                             <button className="btn btn-lg w-100 text-white mt-3" 
//                                 style={{background: "linear-gradient(45deg, #9733EE, #DA22FF)", borderRadius: "10px"}}>
//                                 Get Started
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//       ) : (
//         <p>No product selected</p>
//       )}
//     </div>
//   );
