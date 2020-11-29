import PropTypes from "prop-types";
import React from "react";
import { IconButton, TimerBox } from "../common";

export const OrderControls = ({ moveSubOne }) => (
  <TimerBox>
    <IconButton onClick={() => moveSubOne("up")} aria-label="Move Timer Up" />
    <IconButton
      onClick={() => moveSubOne("down")}
      aria-label="Move Timer Down"
    />
  </TimerBox>
);

OrderControls.propTypes = {
  moveSubOne: PropTypes.func
};
