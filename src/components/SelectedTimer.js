import React from "react";
import { useSelector } from "react-redux";
import { filter, prop } from "ramda";

export default () => {
  const timers = useSelector((s) => s);
  const current = filter(prop("isDisplayed"), timers)[0];

  return <div>{current.title}</div>;
};
