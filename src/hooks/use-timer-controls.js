import { useState } from "react";
import { useSelector } from "react-redux";
import { prop, filter } from "ramda";

export function useTimerControls() {
  const [timerControls, setTimerControls] = useState({
    currentTimerId: null,
    currentSubTimerId: null
  });
  const timers = useSelector((s) => s);
  const currentTimer = filter(prop("isDisplayed"), timers)[0];

  return [timerControls, setTimerControls];
}
