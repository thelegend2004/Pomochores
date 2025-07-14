import { useEffect, useState } from "react";

export default function Timer({ active, onDone, time }) {
  const [secondsLeft, setSecondsLeft] = useState(null);

  useEffect(() => {
    if (!active) return;
    setSecondsLeft(time);
    const timer = setInterval(() => {
      setSecondsLeft((sec) => Math.max(sec - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [active, onDone, time]);

  useEffect(() => {
    if (active && secondsLeft === 0) {
      onDone();
      setSecondsLeft(1 * 3);
    }
  }, [active, onDone, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="mt-4 text-center text-2xl font-mono">
      {active ? `${minutes}:${seconds.toString().padStart(2, "0")}` : "Idle"}
    </div>
  );
}
