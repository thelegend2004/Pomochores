import { useEffect, useState } from "react";

export default function Timer({ active, onDone }) {
  const [secondsLeft, setSecondsLeft] = useState(1 * 10);

  useEffect(() => {
    if (!active) return;

    const timer = setInterval(() => {
      setSecondsLeft((sec) => {
        if (sec <= 1) {
          clearInterval(timer);
          onDone();
          return 0;
        }
        return sec - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [active, onDone]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="mt-4 text-center text-2xl font-mono">
      {active ? `${minutes}:${seconds.toString().padStart(2, "0")}` : "Idle"}
    </div>
  );
}
