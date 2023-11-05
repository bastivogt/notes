import React from "react";
import { NavLink } from "react-router-dom";

function List({ children, className }) {
  return <ul className={"list-group" + " " + className}>{children}</ul>;
}

List.Item = function ({ children, className }) {
  return <li className={"list-group-item" + " " + className}>{children}</li>;
};

export default List;
