import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { convertSecToHMS } from "../../lib/timeHelpers";

const SubTimer = ({
  displayTimerId, isLast, isTicking, rotateSub, timer
}) => {
  const [timeLeft, setTimeLeft] = useState(timer.totalSeconds);

  useEffect(() => {
    if (timer.isCurrent && isTicking) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    if (timeLeft < 0) {
      nextSubTimer("next");
    }
  });

  const nextSubTimer = (direction) => {
    setTimeLeft(timer.totalSeconds);
    isLast(timer);
    rotateSub(displayTimerId, timer.id, direction);
  };

  const HMS = convertSecToHMS(timeLeft);
  timer.hours = HMS[0];
  timer.min = HMS[1];
  timer.sec = HMS[2];

  return <div>subTimer</div>;
};

SubTimer.propTypes = {
  isLast: PropTypes.func,
  displayTimerId: PropTypes.number,
  rotateSub: PropTypes.func,
  toggleTicking: PropTypes.func,
  timer: PropTypes.shape({
    id: PropTypes.number,
    index: PropTypes.number,
    hours: PropTypes.number,
    min: PropTypes.number,
    sec: PropTypes.number,
    isCurrent: PropTypes.bool,
    totalSeconds: PropTypes.number,
    title: PropTypes.string
  })
};

export default SubTimer;
