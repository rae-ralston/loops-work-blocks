import PropTypes from "prop-types";
import React from "react";
import { IconButton, TimerBox } from "../common";

export const OrderControls = ({ moveSubTimerOne }) => (
  <TimerBox>
    <IconButton
      onClick={() => moveSubTimerOne("up")}
      aria-label="Move Timer Up"
    />
    <IconButton
      onClick={() => moveSubTimerOne("down")}
      aria-label="Move Timer Down"
    />
  </TimerBox>
);

OrderControls.propTypes = {
  moveSubTimerOne: PropTypes.func,
};
