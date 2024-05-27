import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ message, isIcon, path, children }) => {
  if (isIcon) {
    return (
      <Link to={path} className="primary-button">
        <span>{children}</span>
        <span className="primary-button__text">{message}</span>
      </Link>
    );
  }

  return (
    <Link to={path} className="primary-button">
      <span className="primary-button__text">{message}</span>
    </Link>
  );
};

export default ButtonLink;
