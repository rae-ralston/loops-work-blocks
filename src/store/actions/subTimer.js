import types from "../constants";

// TODO move sub arbritrary positions
const moveSubOne = (payload) => ({ type: types.MOVE_SUB_ONE, ...payload });

const newSubTimer = (id, title, totalTime) => ({
  type: types.NEW_SUB,
  id,
  title,
  totalTime,
});

const rotateSubTimer = (id, subId, direction) => ({
  type: types.ROTATE_SUB,
  id,
  subId,
  direction,
});

export default {
  moveSubOne,
  newSubTimer,
};
