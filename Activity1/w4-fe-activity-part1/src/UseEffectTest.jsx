// src/UseEffectTest.jsx
import { useState, useEffect } from "react";

const UseEffectTest = () => {
  // State slices
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect 1: no dependency array (runs once if empty array)
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []); // empty array → runs only once

  // useEffect 2: depends on toggleTwo
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);

  // useEffect 3: interval with cleanup, depends on count
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      {console.log("rendered or re-rendered")}
      <h1>UseEffectTest Component</h1>

      {/* ToggleOne Button */}
      <button onClick={() => setToggleOne(!toggleOne)} style={{ margin: "5px" }}>
        ToggleOne
      </button>
      <span> Current value: {toggleOne.toString()}</span>

      <br />

      {/* ToggleTwo Button */}
      <button onClick={() => setToggleTwo(!toggleTwo)} style={{ margin: "5px" }}>
        ToggleTwo
      </button>
      <span> Current value: {toggleTwo.toString()}</span>

      <br />

      {/* Count Button */}
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>
        Count
      </button>
      <span> Current value: {count}</span>
    </div>
  );
};

export default UseEffectTest;
