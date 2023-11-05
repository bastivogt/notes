import React from "react";

function Card({ children, className }) {
  return <div className={"card" + " " + className}>{children}</div>;
}

Card.Header = function ({ children, className }) {
  return <div className={"card-header" + " " + className}>{children}</div>;
};

Card.Body = function ({ children, className }) {
  return <div className={"card-body" + " " + className}>{children}</div>;
};

Card.Footer = function ({ children, className }) {
  return <div className={"card-footer" + " " + className}>{children}</div>;
};

export default Card;
