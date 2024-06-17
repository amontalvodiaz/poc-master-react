export default function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const porcentagePacked = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {porcentagePacked === 100
          ? `You're ready to go. ✈️`
          : `You have ${totalItems} items on your list, and you already packed
        ${totalPacked} (${porcentagePacked}%)`}
      </em>
    </footer>
  );
}
