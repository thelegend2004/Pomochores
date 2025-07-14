import { useState } from "react";

function ChoreInput({ onAdd }) {
  const [text, setText] = useState("");
  const [duration, setDuration] = useState("");
  const [errorShow, setErrorShow] = useState(false);

  const handleAdd = () => {
    if (text.trim() && parseInt(duration, 10) && parseInt(duration, 10) > 0) {
      const newDuration =
        parseInt(duration, 10) > 99999 ? 99999 : parseInt(duration, 10);
      const slicedText = text
        .trim()
        .slice(0, text.length > 18 ? 18 : text.length);
      onAdd(slicedText, newDuration);
      setErrorShow(false);
    } else {
      setErrorShow(true);
    }
    setText("");
    setDuration("");
  };

  return (
    <>
      {errorShow && (
        <div className="flex justify-center mb-2">
          <span className="text-red-900 text-center">
            Something's wrong, I can feel it
          </span>
        </div>
      )}
      <div className="flex gap-2">
        <input
          className="rounded-xl p-2 w-full bg-white"
          value={text}
          maxLength={18}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a chore..."
        />
        <input
          className="rounded-xl p-2 w-full bg-white"
          type="number"
          value={duration}
          min="1"
          max="99999"
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder="Chore duration..."
        />
        <button
          onClick={handleAdd}
          className="bg-red-500 text-white font-semibold px-8 py-2 rounded-xl"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default ChoreInput;
