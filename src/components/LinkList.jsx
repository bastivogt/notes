import React from "react";
import { Link, NavLink } from "react-router-dom";

function LinkList({ children, className }) {
  return <div className={"list-group" + " " + className}>{children}</div>;
}

LinkList.Item = function ({ children, className, to = "" }) {
  return (
    <Link
      className={"list-group-item list-group-item-action" + " " + className}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkList;
