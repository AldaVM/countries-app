function getFormatCountry(country) {
  return country.toLowerCase().trim();
}

export function getCountriesByFilters(countries, filters) {
  return countries.reduce((filteredCountries, country) => {
    const countryName = getFormatCountry(country.name);
    const countryToSearch = getFormatCountry(filters.name);
    const matchCountriesName = countryName.startsWith(countryToSearch);

    if (filters.region === "all" && matchCountriesName) {
      filteredCountries.push(country);
    } else if (country.region === filters.region && matchCountriesName) {
      filteredCountries.push(country);
    }

    return filteredCountries;
  }, []);
}

export function getFiltersCountries(searchFilter, countries = []) {
  let filters = countries.reduce((filters, currentCountry) => {
    if (filters[currentCountry[searchFilter]]) {
      filters[currentCountry[searchFilter]] += 1;
    } else {
      filters[currentCountry[searchFilter]] = 1;
    }

    return filters;
  }, {});

  return Object.keys(filters).map((key) => {
    return {
      label: `${key} (${filters[key]})`,
      value: key,
    };
  });
}
