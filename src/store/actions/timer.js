import types from "../constants";

const create = (payload) => ({ type: types.CREATE, ...payload });
const displaySingle = (payload) => ({ type: types.DISPLAY_SINGLE, ...payload });
const incrementLoops = (payload) => ({
  type: types.INCREMENT_LOOPS,
  ...payload,
});
const updateTitle = (payload) => ({ type: types.UPDATE_TITLE, ...payload });

export default {
  create,
  displaySingle,
  incrementLoops,
  updateTitle,
};
