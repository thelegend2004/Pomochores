import { useState } from "react";

export default function ChoreInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="border rounded p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a chore..."
      />
      <button
        onClick={handleAdd}
        className="bg-red-500 text-white font-semibold px-8 py-2 rounded-xl"
      >
        Add
      </button>
    </div>
  );
}
