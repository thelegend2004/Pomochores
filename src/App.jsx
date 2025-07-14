import { useEffect, useState } from "react";
import ChoreInput from "./components/ChoreInput";
import ChoreList from "./components/ChoreList";
import TomatoIcon from "./assets/tomato.svg?react";
import Timer from "./components/Timer";

// TODO: Add possibility to change time of chore
// TODO: When adding chore add option to select time
// TODO: Add scroll bar
// TODO: Change inputs design

function App() {
  const defaultTime = 60;
  const [chores, setChores] = useState(() => {
    const saved = localStorage.getItem("chores");

    return saved
      ? JSON.parse(saved)
      : [
          {
            text: "New Chore #0",
            done: false,
            active: false,
            time: defaultTime + 20,
          },
          {
            text: "New Chore #1",
            done: false,
            active: false,
            time: defaultTime + 30,
          },
        ];
  });
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("chores", JSON.stringify(chores));
  }, [chores]);

  const addChore = (text) => {
    setChores([
      ...chores,
      { text, done: false, active: false, time: defaultTime },
    ]);
  };

  const toggleDone = (index) => {
    const updated = [...chores];
    updated[index].done = !updated[index].done;
    updated[index].active = false;
    setChores(updated);
  };

  const deleteChore = (index) => {
    const updated = [...chores].filter((chore, i) => {
      if (index !== i) return chore;
    });

    setChores(updated);
  };

  const startTimer = (index) => {
    const updated = [...chores].map((chore) => {
      chore.active = false;
      return chore;
    });
    updated[index].done = false;
    updated[index].active = true;

    setActiveIndex(index);
    setChores(updated);
  };

  const stopTimer = () => {
    const updated = [...chores];
    setActiveIndex(null);
    updated[activeIndex].active = false;
    setChores(updated);
  };

  const tick = () => {
    const updated = [...chores];
    updated[activeIndex].time -= 1;
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
        onStop={stopTimer}
        onDelete={deleteChore}
        onToggleDone={toggleDone}
        chores={chores}
      />
      <Timer
        active={activeIndex !== null}
        time={activeIndex !== null ? chores[activeIndex].time : defaultTime}
        onTick={tick}
        onFinish={finishTimer}
      />
    </div>
  );
}

export default App;
