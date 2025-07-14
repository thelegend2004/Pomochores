import TrashbinIcon from "../assets/trashbin.svg?react";
import TrashbinHoverIcon from "../assets/trashbin-hover.svg?react";
import ToggleIcon from "../assets/toggle.svg?react";
import UntoggleIcon from "../assets/untoggle.svg?react";
import StartIcon from "../assets/start.svg?react";
import StopIcon from "../assets/stop.svg?react";
import ChevronIcon from "../assets/cvevron.svg?react";
import { useState } from "react";

function ChoreList({
  chores,
  onStart,
  onStop,
  onDelete,
  onToggleDone,
  onUpdateText,
  onUpdateTime,
}) {
  const [trashbinHoveredIndex, setTrashbinHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <ul className="mt-4 space-y-2">
      {chores.map((chore, index) => (
        <div key={index}>
          <li
            className={`flex justify-between mb-5 items-center p-2 rounded-xl ${
              chore.active ? "bg-red-100" : "bg-white"
            }`}
          >
            <span className={chore.done ? "line-through text-gray-400" : ""}>
              {chore.text} :{" "}
              <span className="text-gray-500">{chore.time} sec.</span>
            </span>

            <div className="space-x-2">
              <button
                onClick={() => {
                  setExpandedIndex(expandedIndex === index ? null : index);
                }}
              >
                <ChevronIcon
                  className={`relative top-8 right-14 inline h-6 w-6 mx-1 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

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
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-1 flex flex-col gap-1">
              <div>
                <span>Text: </span>
                <input
                  type="text"
                  value={chore.text}
                  className="w-auto text-gray-700 px-1 py-0.5 border bg-white border-gray-300 rounded-xl"
                  onChange={(e) => onUpdateText(index, e.target.value)}
                />
              </div>
              <div>
                <span>Duration: </span>
                <input
                  type="number"
                  value={chore.time}
                  min="1"
                  className="w-auto text-gray-700 px-1 py-1 border bg-white border-gray-300 rounded-xl"
                  onChange={(e) => onUpdateTime(index, e.target.value || 0)}
                />
                <span> seconds</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default ChoreList;
