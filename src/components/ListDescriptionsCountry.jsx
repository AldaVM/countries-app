import React from "react";

const ListDescriptionsCountry = ({ descriptionsCountry = [] }) => {
  return (
    <ul className="country-detail__description-list">
      {descriptionsCountry.map((descriptionCountry, index) => (
        <li
          className="country-detail__description-list__item"
          key={descriptionCountry.value + "00" + index}
        >
          <strong className="country-detail__description-list__label">
            {descriptionCountry.label}
          </strong>
          <span>{descriptionCountry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListDescriptionsCountry;
