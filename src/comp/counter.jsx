import { useState } from "react";
const Counter = ({ props }) => {
  const [counter, setCounter] = useState(props.initial);
  const pluseNumber = () => {
    setCounter((counter) => counter + props.steps);
  };

  const subNumber = () => {
    setCounter((counter) => counter - props.steps);
  };
  return (
    <div>
      <button disabled={counter >= props.max} onClick={pluseNumber}>
        +
      </button>{" "}
      <p>{counter}</p>
      <button disabled={counter <= props.min} onClick={subNumber}>
        -
      </button>
    </div>
  );
};

export default Counter;
