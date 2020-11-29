import types from "../constants";

// TODO move sub arbritrary positions
const moveSubOne = (payload) => ({ type: types.MOVE_SUB_ONE, ...payload });

const createSub = (payload) => ({
  type: types.CREATE_SUB,
  ...payload
});

const rotateSub = (payload) => ({
  type: types.ROTATE_SUB,
  ...payload
});

export default {
  moveSubOne,
  createSub,
  rotateSub
};
