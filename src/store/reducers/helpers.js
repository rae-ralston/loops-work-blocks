import { curry, map } from "ramda";

export function isTimerDisplayed(state, id) {
  return state.map((timer) => {
    const localTimer = { ...timer };
    localTimer.isDisplayed = timer.id === id;
    return localTimer;
  });
}
const setSubToCurrent = (timer, status) => ({ ...timer, isCurrent: status });

function rotatePrevious(subTimers, index) {
  let localIndex = index;
  if (index <= 0) localIndex = subTimers.length;

  return subTimers.map((timer) => (timer.index === localIndex
    ? setSubToCurrent(timer, true)
    : timer
  ));
}

const findNewCurrent = curry((subId, nextIndex, isNext, s) => {
  const { index } = s;
  let localNext;

  // refactor to functional methods
  if (s.id === subId) {
    localNext = isNext ? index + 1 : index - 1;
    return setSubToCurrent(s, false);
  }

  if (index === localNext && isNext) {
    return setSubToCurrent(s, true);
  }

  return s;
});

export function handleRotateSub(timers, { direction, subId }) {
  let nextIndex;
  let temp;
  let atEnd = false;
  const isNext = direction === "next";
  const isPrev = direction === "prev";

  // const determineCurrentSub = findNewCurrent(subId, nextIndex, isNext);
  // const localSubs = map(determineCurrentSub, timers.subTimers);

  const { subTimers } = timers;

  if (isNext) {
    if (nextIndex > subTimers.length) {
      temp = setSubToCurrent(subTimers[0], true);
      atEnd = true;
    }

    timers.subTimers[0] = atEnd ? temp : setSubToCurrent(subTimers[0], false);
  }

  if (isPrev) {
    timers.subTimers = rotatePrevious({
      subTimers,
      nextIndex,
      direction
    });
  }

  atEnd = false;
  return timers;
}
