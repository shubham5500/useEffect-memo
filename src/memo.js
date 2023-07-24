import React, { useState, memo, useMemo } from "react";

export const Main = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    },
    {
      id: 3,
      name: "Cena"
    }
  ]);

  const addItem = () => {
    setItems([...items, { id: 4, name: "Shubham" }]);
  };

  // const memoItems = useMemo(() => items, [items]);

  console.log("Main renders");
  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>Counter</button>

      <button onClick={addItem}>Click</button>
      <ItemList items={items} />
    </div>
  );
};

export const ItemList = memo(({ items }) => {
  console.log("ItemList renders");
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
});
