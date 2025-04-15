import { createContext, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
    
  };

  return (
    <ScoreContext.Provider value={{ score, increaseScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
