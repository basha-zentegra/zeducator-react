import React from "react";

const UserProfile = ({ profiles }) => {
  return (
    <div>
      {profiles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        profiles.map((user, index) => (
          // <div key={index}>
          //   <h3>{user.Name}</h3>
          //   <p>{user.Email}</p>
          // </div>
          <div className="container mt-4">
          <div className="card shadow-lg border-0 rounded-4 p-4">
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
              
          </div>
      </div>
        ))
      )}
    </div>
  );
};

export default UserProfile;
