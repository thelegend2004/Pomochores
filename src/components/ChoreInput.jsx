import { useState } from "react";

function ChoreInput({ onAdd }) {
  const [text, setText] = useState("");
  // const [duration, setDuration] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
      // setDuration("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="rounded-xl p-2 w-full bg-white"
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

export default ChoreInput;
