import { INCREMENT_LOOPS_MADE } from "../constants";

export default function incrementLoopsMade(displayTimerId) {
  return {
    type: INCREMENT_LOOPS_MADE,
    displayTimerId,
  };
}
