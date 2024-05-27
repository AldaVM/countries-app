import React from "react";

const CardCountry = ({ name, population, region, capital, flag }) => {
  return (
    <>
      <img
        className="country-card__image"
        src={flag}
        alt={`flag of country ${name}`}
      />
      <div className="country-card-content">
        <h3 className="country-card-title">{name}</h3>
        <ul className="country-card__information">
          <li className="country-card__information__item">
            <span className="country-card__information__label">
              Population:
            </span>
            <span>{population}</span>
          </li>
          <li className="country-card__information__item">
            <span className="country-card__information__label">Region:</span>
            <span>{region}</span>
          </li>
          <li className="country-card__information__item">
            <span className="country-card__information__label">Capital:</span>
            <span>{capital}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardCountry;
