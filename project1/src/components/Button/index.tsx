import React, { useState } from "react";
import Confetti from "react-confetti";

const Button = ({ label }: { label: string }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <button
        onClick={() => {
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        }}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          border: "1px solid #5c5c5c",
          cursor: "pointer",
          background: "black",
        }}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
