import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { LOAD_MORE_COUNTRIES } from "../constant";
import { useCountriesContext } from "../hooks/useCountriesContext";
import CardCountry from "./CardCountry";

const ListCountries = () => {
  const { state, dispatch } = useCountriesContext();
  const { filteredCountries, visibleCountries, hasMore, filters } = state;

  let observer = useRef();
  let loadingMore = filteredCountries.length > visibleCountries.length;

  const lastCountryElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            dispatch({ type: LOAD_MORE_COUNTRIES, payload: filteredCountries });
            console.log("oli");
          }
        },
        {
          rootMargin: "100px",
          threshold: 1,
        }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore, dispatch, filteredCountries, filters]
  );

  return (
    <ul className="countries-template-grid">
      {/* <code>{JSON.stringify(JSON.stringify(visibleCountries))}</code>
      <code>{JSON.stringify(JSON.stringify(filteredCountries))}</code> */}
      {visibleCountries &&
        visibleCountries.map((country, index) => {
          if (visibleCountries.length === index + 1) {
            return (
              <li
                className="country-card"
                key={country.numericCode}
                ref={lastCountryElementRef}
              >
                <Link to={`/country/${country.numericCode}`}>
                  <CardCountry {...country} />
                </Link>
              </li>
            );
          } else {
            return (
              <li className="country-card" key={country.numericCode}>
                <Link to={`/country/${country.numericCode}`}>
                  <CardCountry {...country} />
                </Link>
              </li>
            );
          }
        })}
      {loadingMore && <span>Scrolling to Loading More Countries</span>}
    </ul>
  );
};

export default ListCountries;
