import { useState } from "react";
import "./style.css";

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [steps, setSteps] = useState(1);
  const [days, setDays] = useState(0);

  const valueUp = (currentValue, addend) => {
    return Number(currentValue) + Number(addend);
  };

  const valueDown = (currentValue, subtrahend) => {
    return Number(currentValue) - Number(subtrahend);
  };

  const inputStepsOnChangeHandler = (stepsEvent) => {
    setSteps(stepsEvent.target.value);
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

  const inputCountOnchangeHandler = (countEvent) => {
    setDays(countEvent.target.value);
  };

  const buttonResetOnClickHandler = () => {
    setDays(0);
    setSteps(1);
  };
  return (
    <div className="App">
      <p>Date Counter</p>
      <div>
        <input
          type="range"
          max={100}
          min={1}
          onChange={inputStepsOnChangeHandler}
          value={steps}
        />
        Step: {steps}
        <p />
        <button onClick={counterDown}>-</button>
        <input
          type="number"
          placeholder="Count .. "
          value={days}
          onChange={inputCountOnchangeHandler}
        />
        <button onClick={counterUp}>+</button>
      </div>
      <p>{days + " days from today is " + currentDate.toDateString()}</p>
      <button onClick={buttonResetOnClickHandler}>Reset</button>
    </div>
  );
}

export default Clock;
