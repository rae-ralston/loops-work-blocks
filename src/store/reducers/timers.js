import {
  DISPLAY_SINGLE_TIMER,
  ROTATE_SUB_TIMER,
  NEW_DISPLAY_TIMER,
  NEW_SUB_TIMER,
  INCREMENT_LOOPS_MADE,
  UPDATE_DISPLAY_TIMER_TITLE,
  MOVE_SUB_TIMER_ONE,
} from "../constants";
import { isTimerDisplayed, handleRotateSubTimer } from "./helpers";

import data from "../../lib/data";
import { createDisplayTimer, createSubTimer } from "../../lib/helpers";

export default function timers(state = data, action) {
  switch (action.type) {
    case DISPLAY_SINGLE_TIMER:
      return state.map((timer) => ({
        ...timer,
        isDisplayed: timer.id === action.id,
      }));

    case ROTATE_SUB_TIMER:
      return state.map((timer) =>
        timer.id === action.id
          ? handleRotateSubTimer(timer, action)
          : timer
      );

    case NEW_DISPLAY_TIMER: {
      const newSubTimer = createDisplayTimer(action.title);
      return isTimerDisplayed([...state, newSubTimer], newSubTimer.id);
    }

    case NEW_SUB_TIMER:
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

    case INCREMENT_LOOPS_MADE:
      return state.map((timer) =>
        timer.id === action.id
          ? { ...timer, loopsMade: timer.loopsMade + 1 }
          : timer
      );

    case UPDATE_DISPLAY_TIMER_TITLE:
      return state.map((timer) =>
        timer.id === action.id
          ? { ...timer, title: action.title }
          : timer
      );

    case MOVE_SUB_TIMER_ONE:
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

// const moveSubTimerOne = (displayTimer, action) => {
//   const tempSubTimers = displayTimer.subTimers;

//   console.log(tempSubTimers, action);
//   displayTimer.subTimers = tempSubTimers;
//   return displayTimer;
// };
