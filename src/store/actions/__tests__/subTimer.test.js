import actions from "../subTimer";
import types from "../../constants";

describe("subtimer actions", () => {
  it("creates the createSub Action", () => {
    const payload = {id: 2,title: "new sub",totalTime: 327};

    const createdAction = actions.createSub(payload);
    const action = { type: types.CREATE_SUB, ...payload };

    expect(createdAction).toEqual(action);
  });

  it("Creates the rotateSub Action", () => {
    const payload = {id: 2, subTimerId: 4, direction: "next"}

    const createdAction = actions.rotateSub(payload);
    const action = { type: types.ROTATE_SUB, ...payload}

    expect(createdAction).toEqual(action);
  });
});
