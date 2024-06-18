import { useState } from "react";

const servicePercentages = [
  { message: "It was good", percentage: 10 },
  { message: "I liked it!", percentage: 15 },
  { message: "It was amazing!!", percentage: 20 }
];

function Calculator() {
  const [bill, setBill] = useState(0);
  const [servicePercentage, setServicePercentage] = useState(10);
  const [friendServicePercentage, setFriendServicePercentage] = useState(10);
  return (
    <>
      <Biller bill={bill} setBill={setBill} />
      <Percentages
        percentage={servicePercentage}
        setPercentage={setServicePercentage}
      >
        How did you like the service?{" "}
      </Percentages>
      <Percentages
        percentage={friendServicePercentage}
        setPercentage={setFriendServicePercentage}
      >
        How did your friend like the service?{" "}
      </Percentages>
      <TotalToPay
        bill={bill}
        servicePercentage={servicePercentage}
        friendServicePercentage={friendServicePercentage}
      />
      <Reset
        setBill={setBill}
        setServicePercentage={setServicePercentage}
        setFriendServicePercentage={setFriendServicePercentage}
      />
    </>
  );
}

const Biller = ({ bill, setBill }) => {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
};

const TotalToPay = ({ bill, servicePercentage, friendServicePercentage }) => {
  const serviceTip = (servicePercentage / 100) * bill;
  const friendServiceTip = (friendServicePercentage / 100) * bill;
  const calculateTotalBill = () => {
    return Number(bill) + Number(serviceTip) + Number(friendServiceTip);
  };
  return (
    <div>
      <h1>
        You will pay ${calculateTotalBill()} (${serviceTip} + $
        {friendServiceTip} tip)
      </h1>
    </div>
  );
};

const Reset = ({
  setBill,
  setFriendServicePercentage,
  setServicePercentage
}) => {
  const resetValues = () => {
    setBill(0);
    setFriendServicePercentage(10);
    setServicePercentage(10);
  };
  return <button onClick={resetValues}>Reset</button>;
};

const Percentages = ({ percentage, setPercentage, children }) => {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(selectEvent) => {
          return setPercentage(selectEvent.target.value);
        }}
      >
        {servicePercentages.map((servicePercentage) => (
          <option
            key={servicePercentage.percentage}
            value={servicePercentage.percentage}
          >
            {`${servicePercentage.message}  ( ${servicePercentage.percentage}% )`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Calculator;
