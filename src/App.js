import { useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [steps, setSteps] = useState(0);
  const [days, setDays] = useState(0);

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
    setDays(valueUp(days, steps === 0 ? 1 : steps));
    updateDate();
  };

  const counterDown = () => {
    setDays(valueDown(days, steps === 0 ? 1 : steps));
    updateDate();
  };

  const updateDate = () => {
    setCurrentDate(
      (currentDate) =>
        new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000)
    );
  };

  return (
    <div className="App">
      <p>Date Counter</p>
      <div>
        <button onClick={stepDown}>-</button>
        Step: {steps}
        <button onClick={stepUp}>+</button>
        <p />
        <button onClick={counterDown}>-</button>
        Count: {days}
        <button onClick={counterUp}>+</button>
      </div>
      <p>{days + " days from today is " + currentDate.toDateString()}</p>
    </div>
  );
}

export default App;
