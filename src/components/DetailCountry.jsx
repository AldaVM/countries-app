import { KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { useCountriesContext } from "../hooks/useCountriesContext";
import ButtonLink from "./ButtonLink";
import Layout from "./Layout";
import ListDescriptionsCountry from "./ListDescriptionsCountry";

const BordersCountry = ({ borders }) => {
  return (
    <section className="country-detail__borders-content">
      <h2 className="subtitle">Border Countries:</h2>
      <ul className="country-detail__tags-list">
        {borders.map((border) => (
          <li className="country-detail__tags-list__item " key={border}>
            {border}
          </li>
        ))}
      </ul>
    </section>
  );
};

const DetailCountry = () => {
  const { id } = useParams();
  const { state } = useCountriesContext();
  const { countries } = state;

  const [detailCountry] = countries.filter(
    (country) => country.numericCode === id
  );

  const languages = detailCountry.languages.map((language, index, array) => {
    if (index === array.length - 1) {
      return language.name;
    } else {
      return language.name + ", ";
    }
  });

  const listDescriptions = [
    {
      label: "Native Name:",
      value: detailCountry.nativeName,
    },
    {
      label: "Population:",
      value: detailCountry.population,
    },
    {
      label: "Region:",
      value: detailCountry.region,
    },
    {
      label: "Sub Region:",
      value: detailCountry.population,
    },
    {
      label: "Population:",
      value: detailCountry.subregion,
    },
    {
      label: "Capital:",
      value: detailCountry.capital,
    },
  ];

  const listDescriptionsTwo = [
    {
      label: "Top Level Domain:",
      value: detailCountry.topLevelDomain[0],
    },
    {
      label: "Currencies:",
      value: "".concat(
        ...detailCountry.currencies.map((currency) => currency.name)
      ),
    },
    {
      label: "Laguangues:",
      value: "".concat(...languages),
    },
  ];

  return (
    <Layout>
      <div className="country-detail__content-controls">
        <ButtonLink message="Back" path="/" isIcon={true}>
          <KeyboardBackspace />
        </ButtonLink>
      </div>
      <section className="country-detail__content">
        <div className="country-detail__image">
          <img
            loading="lazy"
            src={detailCountry.flag}
            alt={`Flag of the country ${detailCountry.name}`}
          />
        </div>
        <section className="country-detail__description">
          <h1 className="title">{detailCountry.name}</h1>
          <section className="country-detail__description-content">
            <ListDescriptionsCountry descriptionsCountry={listDescriptions} />
            <ListDescriptionsCountry
              descriptionsCountry={listDescriptionsTwo}
            />
          </section>
          {detailCountry.borders && (
            <BordersCountry borders={detailCountry.borders} />
          )}
        </section>
      </section>
    </Layout>
  );
};

export default DetailCountry;
