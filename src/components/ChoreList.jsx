export default function ChoreList({ chores, onStart, onToggleDone }) {
  return (
    <ul className="mt-4 space-y-2">
      {chores.map((chore, index) => (
        <li
          key={index}
          className="flex bg-white justify-between items-center p-2 border rounded"
        >
          <span>{chore.text}</span>
          <div className="space-x-2">
            <button onClick={() => onStart(index)} className="text-red-600">
              Start
            </button>
            <button
              onClick={() => onToggleDone(index)}
              className="text-gray-600"
            >
              ✓
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
