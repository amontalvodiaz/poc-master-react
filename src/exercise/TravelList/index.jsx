import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false }
];

function TravelList() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 👜 Far Away 🏖️</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(submitEvent) {
    submitEvent.preventDefault();
  }

  const updateDescription = (inputDescriptionEvent) => {
    setDescription(inputDescriptionEvent.target.value);
  };

  const updateQuatity = (selectQuantityEvent) => {
    setQuantity(Number(selectQuantityEvent.target.value));
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>what do you need for your 😁 trip ?</h3>
      <select value={quantity} onChange={updateQuatity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={updateDescription}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoratotion: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>✖️</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default TravelList;
