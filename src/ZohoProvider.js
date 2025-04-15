import React, { createContext, useState, useEffect } from "react";

export const ZohoContext = createContext();

export const ZohoProvider = ({ children }) => {
  const [isZohoInitialized, setIsZohoInitialized] = useState(false);

  useEffect(() => {
    if (window.ZOHO) {
      window.ZOHO.CREATOR.init()
        .then(() => {
          console.log("✅ Zoho Creator Initialized Successfully");

          // Ensure the user is logged in before setting the state
          window.ZOHO.CREATOR.API.getCurrentUser()
            .then((user) => {
              if (user && user.email) {
                console.log("🔑 User Logged In:", user);
                setIsZohoInitialized(true);
              } else {
                console.error("❌ User not authenticated");
              }
            })
            .catch((error) => {
              console.error("❌ Error fetching user authentication:", error);
            });
        })
        .catch((error) => {
          console.error("❌ Error initializing Zoho Creator:", error);
        });
    } else {
      console.error("❌ Zoho Creator SDK not loaded.");
    }
  }, []);

  return (
    <ZohoContext.Provider value={{ isZohoInitialized }}>
      {children}
    </ZohoContext.Provider>
  );
};



export default ZohoProvider;