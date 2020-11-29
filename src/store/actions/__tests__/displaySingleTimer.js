import displaySingleTimer from "../displaySingleTimer";
import { DISPLAY_SINGLE_TIMER } from "../../constants";

it("Creates the displaySingleTimer Action", () => {
  let createdAction = displaySingleTimer(3);
  let action = { type: DISPLAY_SINGLE_TIMER, displayTimerId: 3 };
  expect(createdAction).toEqual(action);
});
