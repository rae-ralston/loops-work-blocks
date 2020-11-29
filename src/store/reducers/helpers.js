export function isTimerDisplayed(state, id) {
  return state.map((displayTimer) => {
    displayTimer.isDisplayed = displayTimer.id === id;
    return displayTimer;
  });
}

export function handleRotateSub(timers, { direction, subId }) {
  let nextIndex;
  let temp;
  let atEnd = false;
  const isNext = direction === "next";
  const isPrev = direction === "prev";

  timers.subTimers = timers.subTimers.map((subTimer) => {
    const { index } = subTimer;

    if (subTimer.id === subId) {
      nextIndex = isNext ? index + 1 : index - 1;
      return setCurrentSubTimer(subTimer, false);
    }

    if (index === nextIndex && isNext) {
      return setCurrentSubTimer(subTimer, true);
    }

    return subTimer;
  });

  let { subTimers } = timers;

  if (isNext) {
    if (nextIndex > subTimers.length) {
      temp = setCurrentSubTimer(subTimers[0], true);
      atEnd = true;
    }

    timers.subTimers[0] = atEnd
      ? temp
      : setCurrentSubTimer(subTimers[0], false);
  }

  if (isPrev) {
    timers.subTimers = rotatePrevious(
      subTimers,
      nextIndex,
      direction
    );
  }

  atEnd = false;
  return timers;
}

function rotatePrevious(subTimers, index) {
  if (index <= 0) index = subTimers.length;

  return subTimers.map((timer) =>
    timer.index === index ? setCurrentSubTimer(timer, true) : timer
  );
}

function setCurrentSubTimer(timer, status) {
  return { ...timer, isCurrent: status };
}
