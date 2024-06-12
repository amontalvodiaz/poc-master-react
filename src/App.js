import { useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(0);

  const valueUp = (currentValue, addend) => {
    return +currentValue + +addend;
  };

  const valueDown = (currentValue, addend) => {
    return +currentValue - +addend;
  };

  const stepUp = () => {
    setSteps(valueUp(steps, 1));
  };

  const stepDown = () => {
    setSteps(valueDown(steps, 1));
  };

  const counterUp = () => {
    setCount(valueUp(count, steps === 0 ? 1 : steps));
    updateDate();
  };

  const counterDown = () => {
    setCount(valueDown(count, steps === 0 ? 1 : steps));
    updateDate();
  };

  const updateDate = () => {
    setCurrentDate(
      (currentDate) =>
        new Date(currentDate.getTime() + count * 24 * 60 * 60 * 1000)
    );
  };

  return (
    <div className="App">
      <p>Clock Counter</p>
      <div>
        <button onClick={stepDown}>-</button>
        Step: {steps}
        <button onClick={stepUp}>+</button>
        <p />
        <button onClick={counterDown}>-</button>
        Count: {count}
        <button onClick={counterUp}>+</button>
      </div>
      <p>{"" + currentDate}</p>
    </div>
  );
}

export default App;
