import {
  useEffect,
  useReducer,
  useCallback,
  createContext,
  useRef,
} from "react";
import {
  SET_REGIONCOUNTRIES_FILTER,
  SET_NAMESCOUNTRIES_FILTER,
  FILTER_COUNTRIES,
  LOAD_MORE_COUNTRIES,
} from "../constant";
import countriesData from "../data/data.json";
import { getCountriesByFilters } from "../utils";

export const CountriesContext = createContext(null);

export const initialState = {
  countries: countriesData,
  filteredCountries: countriesData,
  visibleCountries: [],
  hasMore: true,
  start: 0,
  limit: 2,
  filters: {
    region: "all",
    name: "",
  },
};

export const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCountries, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_MORE_COUNTRIES, payload: state.filteredCountries });
  }, []);

  useEffect(() => {
    dispatch({ type: FILTER_COUNTRIES, payload: state.countries });
    dispatch({ type: LOAD_MORE_COUNTRIES, payload: state.filteredCountries });
  }, [state.filters]);

  return (
    <CountriesContext.Provider value={{ state, dispatch }}>
      {children}
    </CountriesContext.Provider>
  );
};

function reducerCountries(state, action) {
  const { countries, filters } = state;
  switch (action.type) {
    case SET_REGIONCOUNTRIES_FILTER:
      return {
        ...state,
        start: 0,
        filters: {
          ...state.filters,
          region: action.payload,
        },
      };
    case SET_NAMESCOUNTRIES_FILTER:
      return {
        ...state,
        start: 0,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };
    case FILTER_COUNTRIES:
      const filtered = getCountriesByFilters(countries, filters);

      return {
        ...state,
        start: 0,
        filteredCountries: filtered,
      };
    case LOAD_MORE_COUNTRIES:
      let end = state.start + state.limit;
      const newVisibleCountries = state.filteredCountries.slice(0, end);

      return {
        ...state,
        visibleCountries: newVisibleCountries,
        hasMore: newVisibleCountries.length <= state.filteredCountries.length,
        start: end,
      };
    default:
      return state;
  }
}
