import React, { useState } from "react";

function Click() {
  // State...
  const [counter, setCounter] = useState(0);
  // Handle increment...
  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  // Handle decrement...
  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  return (
    <section className="counter-container">
      <div className="counter-label">{counter}</div>

      <button className="action-btn" onClick={handleIncrement}>
        Addition
      </button>
      <button className="action-btn" onClick={handleDecrement}>
        Subtract
      </button>
    </section>
  );
}

export default Click;
