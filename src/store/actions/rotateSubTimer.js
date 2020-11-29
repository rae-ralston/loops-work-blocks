import { ROTATE_SUB_TIMER } from "../constants";

export default function rotateSubTimer(displayTimerId, subTimerId, direction) {
  return {
    type: ROTATE_SUB_TIMER,
    displayTimerId,
    subTimerId,
    direction,
  };
}
