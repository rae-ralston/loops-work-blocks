import types from "../constants";
import { isTimerDisplayed, handleRotateSub } from "./helpers";
import data from "../../lib/data";
import { createDisplayTimer, createSubTimer } from "../../lib/helpers";

export default function timers(state = data, action) {
  switch (action.type) {
    case types.DISPLAY_SINGLE:
      return state.map((timer) => ({
        ...timer,
        isDisplayed: timer.id === action.id,
      }));

    case types.ROTATE_SUB:
      return state.map((timer) =>
        timer.id === action.id ? handleRotateSub(timer, action) : timer
      );

    case types.CREATE: {
      const createSub = createDisplayTimer(action.title);
      return isTimerDisplayed([...state, createSub], createSub.id);
    }

    case types.CREATE_SUB:
      return state.map((timer) => {
        if (timer.id === action.id) {
          const index = timer.subTimers.length + 1;
          const isCurrent = timer.subTimers.length === 0;
          const newDisplayTimer = createSubTimer(
            action.totalTime,
            isCurrent,
            action.title,
            index
          );
          return {
            ...timer,
            subTimers: [...timer.subTimers, newDisplayTimer],
          };
        }
        return timer;
      });

    case types.INCREMENT_LOOPS:
      return state.map((timer) =>
        timer.id === action.id
          ? { ...timer, loopsMade: timer.loopsMade + 1 }
          : timer
      );

    case types.UPDATE_TITLE:
      return state.map((timer) =>
        timer.id === action.id ? { ...timer, title: action.title } : timer
      );

    case types.MOVE_SUB_ONE:
      return state.map((timer) =>
        timer.id === action.id
          ? () => {
              console.log("moving one");
              return timer;
            }
          : timer
      );

    default:
      return state;
  }
}

// const moveSubOne = (displayTimer, action) => {
//   const tempSubTimers = displayTimer.subTimers;

//   console.log(tempSubTimers, action);
//   displayTimer.subTimers = tempSubTimers;
//   return displayTimer;
// };
