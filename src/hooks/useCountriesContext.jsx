import { useContext } from "react";
import { CountriesContext } from "../context/countriesContext";

export const useCountriesContext = () => {
  return useContext(CountriesContext);
};
