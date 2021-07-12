import React, { useState } from "react";

const Counter = () => {
  const initCount = 0;
  const [count, setCount] = useState(initCount);

  const increaseCount = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  // TODO: decreaseCount
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default Counter;
