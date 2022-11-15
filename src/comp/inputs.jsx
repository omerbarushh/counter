import { useState } from "react";

const Inputs = ({ onsubmit }) => {
  const [{ min, max, initial, steps }, setUserInput] = useState({
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    step: 1,
    start: 0,
  });
  const inputChange = ({ target: { name, type, value } }) => {
    setUserInput((input) => {
      return {
        ...input,
        [name]: type === "number" ? Number(value) : value,
      };
    });
  };

  return (
    <div>
      <input
        onChange={inputChange}
        placeholder="add min"
        type="number"
        name="min"
      />
      <input
        onChange={inputChange}
        placeholder="add max"
        type="number"
        name="max"
      />
      <input
        onChange={inputChange}
        placeholder="add initial"
        type="number"
        name="initial"
      />
      <input
        onChange={inputChange}
        placeholder="add staps"
        type="number"
        name="steps"
      />
      <button
        onClick={() => {
          onsubmit({ max, min, steps, initial });
        }}
      >
        add
      </button>
    </div>
  );
};
export default Inputs;
