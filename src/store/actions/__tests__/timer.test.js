import actions from "../timer";
import types from "../../constants";

describe("timer actions", () => {
  const defaultPayload = { id: 3 };

  it("update Action", () => {
    const payload = { ...defaultPayload, title: "Such a pretty new title." };
    const createdAction = actions.updateTitle(payload);
    const action = { type: types.UPDATE_TITLE, ...payload };

    expect(createdAction).toEqual(action);
  });

  it("Create Action", () => {
    const payload = { title: "Timers Are Fun!" };
    const createdAction = actions.create(payload);
    const action = { type: types.CREATE, ...payload };
    expect(createdAction).toEqual(action);
  });

  it("incrementLoops Action", () => {
    let createdAction = actions.incrementLoops(defaultPayload);
    let action = { type: types.INCREMENT_LOOPS, ...defaultPayload };
    expect(createdAction).toEqual(action);
  });

  it("Creates the displaySingleTimer Action", () => {
    let createdAction = actions.displaySingle(defaultPayload);
    let action = { type: types.DISPLAY_SINGLE, ...defaultPayload };
    expect(createdAction).toEqual(action);
  });
});
