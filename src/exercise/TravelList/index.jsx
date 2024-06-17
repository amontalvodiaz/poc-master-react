import { useState } from "react";
import "./index.css";
import  Logo  from "./Logo";
import  Form  from "./Form";
import PackingList  from "./PackingList";
import  Stats  from "./Stats";

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

  const clearAll = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear the list ? "
    );
    if (isConfirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTuggleItem={handleTuggleItem}
        onClearAll={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default TravelList;
