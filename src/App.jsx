import { useState } from "react";
import ChoreInput from "./components/ChoreInput";
import ChoreList from "./components/ChoreList";
import TomatoIcon from "./assets/tomato.svg?react";
import Timer from "./components/Timer";

function App() {
  const [chores, setChores] = useState([
    { text: "New Task #0", done: false, active: false },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const addChore = (text) => {
    setChores([...chores, { text, done: false, active: false }]);
  };

  const toggleDone = (index) => {
    const updated = [...chores];
    updated[index].done = !updated[index].done;
    setChores(updated);
  };

  const deleteChore = (index) => {
    const updated = [...chores].filter((chore, i) => {
      if (index !== i) return chore;
    });

    setChores(updated);
  };

  const startTimer = (index) => {
    const updated = [...chores];
    updated[index].active = !updated[index].active;
    setActiveIndex(index);
    setChores(updated);
  };

  const finishTimer = () => {
    toggleDone(activeIndex);
    setActiveIndex(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="font-bold text-center text-5xl mb-6">
        P<TomatoIcon className="inline h-10 w-10 mx-1" />
        m<TomatoIcon className="inline h-10 w-10 mx-1" />
        ch
        <TomatoIcon className="inline h-10 w-10 mx-1" />
        res
      </h1>
      <ChoreInput onAdd={addChore} />
      <ChoreList
        onStart={startTimer}
        onDelete={deleteChore}
        onToggleDone={toggleDone}
        chores={chores}
      />
      <Timer active={activeIndex !== null} onDone={finishTimer} />
    </div>
  );
}

export default App;
