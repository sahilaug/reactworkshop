import React, { useState } from 'react';
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
  const { name, image, summary } = show;
  const { medium } = image;
  const [isFav, setFav] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="card p20">
      <img alt={name} src={medium} className="card-banner-img" />
      <div>
        <span className="flex-space-between">
          {name}
          <FontAwesomeIcon
            icon="heart"
            style={{ color: isFav ? 'red' : '' }}
            onClick={() => setFav(!isFav)}
          />
        </span>
      </div>
      <div>
        <span className="flex-space-between">
          Summary
          <FontAwesomeIcon
            icon={isExpanded ? 'angle-up' : 'angle-down'}
            onClick={() => setExpanded(!isExpanded)}
          />
        </span>
        <div>
          {isExpanded ? summary : null}
        </div>
      </div>
    </div>
  );
};
