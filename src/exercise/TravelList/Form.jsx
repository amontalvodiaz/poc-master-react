import { useState } from "react";

export default function Form({ onAddItems }) {
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
