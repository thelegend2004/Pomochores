import { useState } from "react";
import ChoreInput from "./components/ChoreInput";
import ChoreList from "./components/ChoreList";
import TomatoIcon from "./assets/tomato.svg?react";

function App() {
  const [chores, setChores] = useState([{ text: "chore" }]);

  const addChore = (text) => {
    setChores([...chores, { text, done: false }]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="font-bold text-center text-5xl mb-6">
        P<TomatoIcon className="inline h-10 w-10 mx-1" />
        m<TomatoIcon className="inline h-10 w-10 mx-1" />
        ch
        <TomatoIcon className="inline  h-10 w-10 mx-1" />
        res
      </h1>
      <ChoreInput onAdd={addChore} />
      <ChoreList chores={chores} />
    </div>
  );
}

export default App;
