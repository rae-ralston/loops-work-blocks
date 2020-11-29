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
    const createdAction = actions.incrementLoops(defaultPayload);
    const action = { type: types.INCREMENT_LOOPS, ...defaultPayload };
    expect(createdAction).toEqual(action);
  });

  it("Creates the displaySingleTimer Action", () => {
    const createdAction = actions.displaySingle(defaultPayload);
    const action = { type: types.DISPLAY_SINGLE, ...defaultPayload };
    expect(createdAction).toEqual(action);
  });
});
