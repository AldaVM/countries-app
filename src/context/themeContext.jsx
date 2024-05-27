import { createContext, useEffect, useReducer } from "react";
import {
  SET_DARK_THEME,
  SET_LIGHT_THEME,
  THEME_LIGHT,
  THEME_DARK,
} from "../constant";

const initialValue = {
  isDark: false,
  theme: THEME_LIGHT,
  title: "Light",
  styles: "layout-container--light",
};

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerTheme, initialValue);
  useEffect(() => {
    document.body.style.backgroundColor = state.isDark
      ? "hsl(207, 26%, 17%)"
      : "hsl(0, 0%, 100%)";
  }, [state.isDark]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

function reducerTheme(state, action) {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        isDark: false,
        theme: THEME_LIGHT,
        title: "Light",
        styles: "layout-container--light",
      };
    case SET_DARK_THEME:
      return {
        ...state,
        isDark: true,
        theme: THEME_DARK,
        title: "Dark",
        styles: "layout-container--dark",
      };
    default:
      return state;
  }
}
