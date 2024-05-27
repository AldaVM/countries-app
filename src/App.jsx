import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getFiltersCountries } from "./utils";
import {
  SET_NAMESCOUNTRIES_FILTER,
  SET_REGIONCOUNTRIES_FILTER,
} from "./constant";
import { useCountriesContext } from "./hooks/useCountriesContext";

import SearchCountry from "./components/Search";
import Filters from "./components/Filters";
import ListCountries from "./components/ListCountries";

import countriesData from "./data/data.json";
import Layout from "./components/Layout";

const App = () => {
  const { state } = useCountriesContext();
  const { countries, filteredCountries } = state;

  const filtersByRegions = [
    {
      label: "Filter by Region",
      value: "all",
    },
    ...getFiltersCountries("region", countriesData),
  ];

  const foundMessage = `${filteredCountries.length} results found for ${countries.length} total countries`;

  return (
    <Layout>
      <section className="countries-filters">
        <SearchCountry filterType={SET_NAMESCOUNTRIES_FILTER} />
        <Filters
          options={filtersByRegions}
          filterType={SET_REGIONCOUNTRIES_FILTER}
        />
      </section>
      <span className="contires-filters__message-result">{foundMessage}</span>
      <ListCountries />
    </Layout>
  );
};

export default App;
