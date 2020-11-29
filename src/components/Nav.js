import { map, prop } from "ramda";
import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const titleList = useSelector(map(prop("title")));
  const titles = titleList.map((title) => <div key={title}>{title}</div>);

  return <>{titles}</>;
};
