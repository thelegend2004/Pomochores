import { useEffect } from "react";

function Timer({ active, time, onTick, onFinish }) {
  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      if (time > 0) {
        onTick?.();
      }
      if (time <= 1) {
        clearInterval(interval);
        onFinish?.();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [active, onFinish, onTick, time]);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="mt-4 text-center text-2xl font-mono">
      {active
        ? `${minutes}:${seconds.toString().padStart(2, "0")}`
        : "No active chore"}
    </div>
  );
}

export default Timer;
