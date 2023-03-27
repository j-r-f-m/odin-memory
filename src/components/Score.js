import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState({
    currScore: 0,
    bestScore: 0,
  });

  return (
    <div>
      <div className="counter">Score: </div>
      <div className="counter">Best Score: </div>
    </div>
  );
};

export default Score;
