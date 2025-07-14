import TrashbinIcon from "../assets/trashbin.svg?react";
import TrashbinHoverIcon from "../assets/trashbin-hover.svg?react";
import ToggleIcon from "../assets/toggle.svg?react";
import UntoggleIcon from "../assets/untoggle.svg?react";
import StartIcon from "../assets/start.svg?react";
import StopIcon from "../assets/stop.svg?react";
import { useState } from "react";

export default function ChoreList({
  chores,
  onStart,
  onStop,
  onDelete,
  onToggleDone,
}) {
  const [trashbinHoveredIndex, setTrashbinHoveredIndex] = useState(null);
  return (
    <ul className="mt-4 space-y-2">
      {chores.map((chore, index) => (
        <li
          key={index}
          className="flex bg-white justify-between items-center p-2 border rounded"
        >
          <span className={chore.done ? "line-through text-gray-400" : ""}>
            {chore.text} :{" "}
            <span className="text-gray-500">{chore.time} seconds</span>
          </span>
          <div className="space-x-2">
            <button
              onClick={chore.active ? () => onStop() : () => onStart(index)}
              className="text-red-600"
            >
              {chore.active ? (
                <StopIcon className="inline h-6 w-6 mx-1" />
              ) : (
                <StartIcon className="inline h-6 w-6 mx-1" />
              )}
            </button>
            <button
              onClick={() => onToggleDone(index)}
              className="text-gray-600"
            >
              {chore.done ? (
                <UntoggleIcon className="inline h-6 w-6 mx-1" />
              ) : (
                <ToggleIcon className="inline h-6 w-6 mx-1" />
              )}
            </button>

            <button
              onMouseEnter={() => setTrashbinHoveredIndex(index)}
              onMouseLeave={() => setTrashbinHoveredIndex(null)}
              onClick={() => onDelete(index)}
            >
              {trashbinHoveredIndex === index ? (
                <TrashbinHoverIcon className="inline h-6 w-6 mx-1" />
              ) : (
                <TrashbinIcon className="inline h-6 w-6 mx-1" />
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
