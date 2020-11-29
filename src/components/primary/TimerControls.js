import PropTypes from "prop-types";
import React from "react";
import { IconButton } from "../common/IconButton";

export const TimerControls = ({ toggleTicking, nextSubTimer }) => (
  <div align="center">
    <IconButton
      onClick={() => nextSubTimer("prev")}
      aria-label="Previous"
    ></IconButton>
    <IconButton
      onClick={() => toggleTicking()}
      aria-label="Play/pause"
    ></IconButton>
    <IconButton
      onClick={() => nextSubTimer("next")}
      aria-label="Next"
    ></IconButton>
  </div>
);

TimerControls.propTypes = {
  toggleTicking: PropTypes.func,
  nextSubTimer: PropTypes.func,
};
