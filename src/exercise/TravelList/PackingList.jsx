import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ items, onDeleteItem, onTuggleItem, onClearAll }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;

  if (sortBy === "input") sortedList = items;

  if (sortBy === "description")
    sortedList = items
      .slice()
      .sort((itemA, itemB) =>
        itemA.description.localeCompare(itemB.description)
      );

  if (sortBy === "packed")
    sortedList = items
      .slice()
      .sort((itemA, itemB) => Number(itemA.packed) - Number(itemB.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTuggleItem={onTuggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear List</button>
      </div>
    </div>
  );
}
