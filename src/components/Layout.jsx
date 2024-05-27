import React from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import Header from "./Header";

const Layout = ({ children }) => {
  const { state } = useThemeContext();

  return (
    <div className={`container ${state.styles}`}>
      <Header />
      <main className={`layout-container-main ${state.styles}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
