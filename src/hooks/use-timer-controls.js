import { useState } from "react";

export function useTimerControls() {
  const [timerControls, setTimerControls] = useState({
    isTicking: false,
    addSubTimer: false,
    editingDisplayTitle: false,
    displayTitle: "",
  });

  return [timerControls, setTimerControls];
}
