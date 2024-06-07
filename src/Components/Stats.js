export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start adding some items to your packing list🚀</em>
        </p>
      </footer>
    );
  }
  const numOfItems = items.length;
  const itemPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((itemPacked / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything..Ready to go ✈"
          : `
          💼 You have ${numOfItems} items on your list, and you already packed ${" "}
          ${itemPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
