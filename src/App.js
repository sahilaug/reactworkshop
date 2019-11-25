import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from './data';

export default () => (
  <div className="card-container">
    {
      data.map((d) => <Card {...d} />)
    }
  </div>
);

const Card = ({ show }) => {
  const { name, image } = show;
  const { medium } = image;
  return (
    <div className="card p20">
      <img alt={name} src={medium} className="card-banner-img" />
      <div>
        <span className="flex-space-between">
          {name}
          <FontAwesomeIcon icon="heart" />

        </span>
      </div>
      <div>
        <span className="flex-space-between">
          Summary
          <FontAwesomeIcon icon="angle-down" />
        </span>
        {/* <div>
          {summary}
        </div> */}
      </div>
    </div>
  );
};
