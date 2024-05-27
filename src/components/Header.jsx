import React from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";
import ButtonTheme from "./ButtonTheme";

const Header = () => {
  const { state } = useThemeContext();
  return (
    <header className={`header-page ${state.styles}`}>
      <div className="layout-container-header header-page__content">
        <Link to="/" className="title">
          <h1 className="title">Where in the world?</h1>
        </Link>
        <ButtonTheme />
      </div>
    </header>
  );
};

export default Header;
