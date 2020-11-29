import PropTypes from "prop-types";
import React from "react";
import { IconButton, TimerBox } from "../common";

const TimerControls = ({ toggleTicking, nextSubTimer }) => (
  <TimerBox>
    <IconButton onClick={() => nextSubTimer("prev")} aria-label="Previous" />
    <IconButton onClick={toggleTicking} aria-label="Play/pause" />
    <IconButton onClick={() => nextSubTimer("next")} aria-label="Next" />
  </TimerBox>
);

TimerControls.propTypes = {
  toggleTicking: PropTypes.func,
  nextSubTimer: PropTypes.func,
};

export default TimerControls;
