export default function Item({ item, onDeleteItem, onTuggleItem }) {
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
