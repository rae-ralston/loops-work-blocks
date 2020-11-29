import rotateSubTimer from "../rotateSubTimer";
import { ROTATE_SUB_TIMER } from "../../constants";

it("Creates the rotateSubTimer Action", () => {
  let createdAction = rotateSubTimer(2, 4, "next");
  let action = {
    type: ROTATE_SUB_TIMER,
    displayTimerId: 2,
    subTimerId: 4,
    direction: "next",
  };
  expect(createdAction).toEqual(action);
});
