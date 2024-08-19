"use client";
import useStore from "./store/useStore";

export default function Home() {
  const {
    count,
    increase,
    decrease,
    inputValue,
    setInputValue,
    addItem,
    itemList,
  } = useStore();

  const handleSubmit = () => {
    addItem(inputValue);
    setInputValue("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Zustand Test App</h1>
      <input
        className="border border-1"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleSubmit}>Add Item </button>
      <ul>
        {itemList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div>
        <p>Count: {count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </main>
  );
}
