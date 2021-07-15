import React, { useState } from "react";

const Counter = () => {
  const initCount = 0;
  const [count, setCount] = useState(initCount);

  const increaseCount = (num) => {
    setCount((prev) => {
      return prev + num;
    });
  };

  const decreaseCount = (num) => {
    setCount((prev) => {
      return prev - num;
    });
  };

  const resetCount = () => {
    setCount(initCount);
  };

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => increaseCount(1)}>+</button>
      <button onClick={resetCount}>0</button>
      <button onClick={() => decreaseCount(1)}>-</button>
      <br />
      <button onClick={() => increaseCount(10)}>+ 10</button>
      <button onClick={() => decreaseCount(10)}>- 10</button>
    </div>
  );
};

export default Counter;
