import { NEW_DISPLAY_TIMER } from "../constants";

export default function newDisplayTimer(title) {
  return {
    type: NEW_DISPLAY_TIMER,
    title,
  };
}
