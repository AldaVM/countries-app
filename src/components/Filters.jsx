import React from "react";
import Select from "react-select";
import { useCountriesContext } from "../hooks/useCountriesContext";
import { useThemeContext } from "../hooks/useThemeContext";

function Filters({ options, filterType }) {
  const { dispatch } = useCountriesContext();
  const { state } = useThemeContext();
  const { isDark } = state;

  const handleFiltersChange = (option) => {
    dispatch({ type: filterType, payload: option.value });
  };

  const stylesFilter = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
        color: isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        padding: "0.20em 0.5em",
        border: "none",
        width: "100%",
        boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
        zIndex: "1",
      };
    },
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
        color: isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      };
    },
    singleValue: (styles) => {
      return {
        ...styles,
        backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
        color: isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      };
    },
  };

  return (
    <div className="countries-filters__controls">
      <Select
        classNamePrefix={state.styles}
        styles={stylesFilter}
        options={options}
        defaultValue={options[0]}
        onChange={handleFiltersChange}
      />
    </div>
  );
}

export default Filters;
