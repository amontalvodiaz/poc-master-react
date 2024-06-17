import { useState } from "react";
import "./index.css";

function TravelList() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  const handleDeleteItem = (id) => {
    const listWithoutItems = items.filter((item) => item.id !== id);
    setItems(listWithoutItems);
  };

  const handleTuggleItem = (id) => {
    const tuggledItemList = items.map((item) => {
      return item.id === id ? { ...item, packed: !item.packed } : item;
    });
    setItems(tuggledItemList);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTuggleItem={handleTuggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 👜 Far Away 🏖️</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(submitEvent) {
    submitEvent.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
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

function PackingList({ items, onDeleteItem, onTuggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTuggleItem={onTuggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onTuggleItem }) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onTuggleItem(item.id)} />
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        key={item.id}
      >
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>✖️</button>
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
