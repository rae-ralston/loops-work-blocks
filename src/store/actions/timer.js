import types from "../constants";

const create = (title) => ({ type: types.CREATE, title });
const displaySingle = (id) => ({ type: types.DISPLAY_SINGLE, id });
const incrementLoops = (id) => ({ type: types.INCREMENT_LOOPS, id });
const updateTitle = (id, title) => ({ type: types.UPDATE_TITLE, id, title });

export default {
  create,
  displaySingle,
  incrementLoops,
  updateTitle,
};
