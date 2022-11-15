import logo from "./logo.svg";
import "./App.css";
import Counter from "./comp/counter";
import Inputs from "./comp/inputs";
import ShowInput from "./comp/showInput";
import { useState } from "react";
function App() {
  const [counters, setCounter] = useState([]);

  return (
    <div className="App">
      {/* <Counter
        min={Number.MIN_SAFE_INTEGER}
        max={Number.MAX_SAFE_INTEGER}
        initial={0}
        steps={1}
      /> */}
      <Inputs
        onsubmit={(counter) => setCounter(() => [...counters, counter])}
      />
      <ShowInput counters={counters} />
    </div>
  );
}

export default App;
