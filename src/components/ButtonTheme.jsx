import { Brightness5Rounded, DarkModeOutlined } from "@mui/icons-material";
import React from "react";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "../constant";
import { useThemeContext } from "../hooks/useThemeContext";

const ButtonThemeIcon = ({ isDark }) => {
  if (isDark) {
    return (
      <span className="button-theme__icon">
        <DarkModeOutlined />
      </span>
    );
  }

  return (
    <span className="button-theme__icon">
      <Brightness5Rounded />
    </span>
  );
};

const ButtonTheme = () => {
  const { state, dispatch } = useThemeContext();
  const { isDark, title } = state;

  function handleToggleThemeClick() {
    console.log(isDark);
    if (!isDark) {
      dispatch({ type: SET_DARK_THEME });
    } else {
      dispatch({ type: SET_LIGHT_THEME });
    }
  }

  return (
    <button className="button-theme" onClick={handleToggleThemeClick}>
      <ButtonThemeIcon theme={isDark} />
      <span>{title} Mode</span>
    </button>
  );
};

export default ButtonTheme;
