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
      >
        {label}
      </button>
    </>
  );
};

export default Button;
