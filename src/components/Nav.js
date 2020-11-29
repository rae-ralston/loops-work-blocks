import { map, prop } from "ramda";
import React from "react";
import { useSelector } from "react-redux";

const Button = (title) => (
  <button type="button" key={title}>
    {title}
  </button>
);

export default () => {
  const titleList = useSelector(map(prop("title")));
  const titles = map(Button, titleList);

  return <>{titles}</>;
};
