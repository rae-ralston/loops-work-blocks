import React from "react";
import PropTypes from "prop-types";

import AddTimer from "../add-timer/AddTimer";
import SubTimer from "../sub-timer/SubTimer";
import { useTimerControls } from "../../hooks/use-timer-controls";

export const CurrentTimer = ({
  newSubTimer,
  displayTimer,
  updateDisplayTimerTitle,
  incrementLoopsMade,
  moveSubTimerOne,
  rotateSubTimer,
}) => {
  const [timerControls, setTimerControls] = useTimerControls();
  const {
    isTicking,
    addSubTimer,
    displayTitle,
    editingDisplayTitle,
  } = timerControls;

  const toggleTicking = () =>
    setTimerControls({
      isTicking: !isTicking,
    });

  const toggleAddSubTimer = () =>
    setTimerControls({
      addSubTimer: !addSubTimer,
    });

  const toggleEditingDisplayTitle = () =>
    setTimerControls({
      editingDisplayTitle: !editingDisplayTitle,
    });

  const handleChange = (e) =>
    setTimerControls({ displayTitle: e.target.value });

  const handleAddSubTimer = (title, totalTime) => {
    newSubTimer(displayTimer.id, title, totalTime);
    toggleAddSubTimer();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleEditingDisplayTitle();
      updateDisplayTimerTitle(displayTimer.id, displayTitle);
    }
  };

  const isLast = (timer) => {
    if (displayTimer.subTimers.length === timer.index) {
      incrementLoopsMade(displayTimer.id);
    }
  };

  const createSubTimers = (displayTimer) => {
    return displayTimer.subTimers.map((timer) => (
      <SubTimer
        displayTimerId={displayTimer.id}
        timer={timer}
        key={"st-" + displayTimer.id + timer.id}
        rotateSubTimer={rotateSubTimer}
        isTicking={isTicking}
        toggleTicking={toggleTicking}
        isLast={isLast}
        moveSubTimerOne={moveSubTimerOne}
      />
    ));
  };

  return <div>current timer</div>;
};

CurrentTimer.propTypes = {
  displayTimer: PropTypes.shape({
    id: PropTypes.number,
    isDisplayed: PropTypes.bool,
    loopsMade: PropTypes.number,
    subTimers: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }),
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  rotateSubTimer: PropTypes.func,
  updateisplayTimerTitle: PropTypes.func,
  moveSubTimerOne: PropTypes.func,
};
