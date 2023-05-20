import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>Counter: </h3>
      <p>Value: {count} </p>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </>
  );
}
