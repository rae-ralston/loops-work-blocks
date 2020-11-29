import React from "react";
import PropTypes from "prop-types";

import { CurrentTimer } from "./CurrentTimer";

export const Primary = ({ timerList, ...props }) => (
  <CurrentTimer
    displayTimer={timerList.filter((timer) => timer.isDisplayed)[0]}
    {...props}
  />
);

Primary.propTypes = {
  timerList: PropTypes.arrayOf(PropTypes.object),
  rotateSubTimer: PropTypes.func,
  incrementLoopsMade: PropTypes.func,
  newSubTimer: PropTypes.func,
  updateDisplayTimerTitle: PropTypes.func,
  moveSubTimerOne: PropTypes.func,
};

Primary.defaultProps = {
  timerList: [],
  rotateSubTimer: () => {},
  incrementLoopsMade: () => {},
  newSubTimer: () => {},
  updateDisplayTimerTitle: () => {},
  moveSubTimerOne: () => {},
};

export default Primary;
