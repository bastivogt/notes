import React from "react";
import { NavLink } from "react-router-dom";

export default function BaseLayout({ children }) {
  return (
    <div className="container">
      <div className="mt-4 mb-4">{children}</div>
    </div>
  );
}
