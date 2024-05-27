import { SearchRounded } from "@mui/icons-material";
import React from "react";
import { useCountriesContext } from "../hooks/useCountriesContext";

export const Search = ({ filterType }) => {
  const { state, dispatch } = useCountriesContext();

  const handleSearchFillers = (e) => {
    dispatch({ type: filterType, payload: e.target.value });
  };

  return (
    <div className="countries-search">
      <span className="countries-search__icon">
        <SearchRounded />
      </span>

      <input
        className="countries-search__input"
        type="text"
        placeholder="Search for a country"
        value={state.filters.name}
        onChange={handleSearchFillers}
      />
    </div>
  );
};

export default Search;
