import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <span data-testid="title">{name}</span>
          <FontAwesomeIcon
            icon="heart"
            style={{ color: isFav ? 'red' : '' }}
            onClick={() => setFav(!isFav)}
            data-testid="fav-icon"
          />
        </span>
      </div>
      <div>
        <span className="flex-space-between">
                    Summary
          <FontAwesomeIcon
            icon={isExpanded ? 'angle-up' : 'angle-down'}
            onClick={() => setExpanded(!isExpanded)}
            data-testid="accordion-icon"
          />
        </span>
        <div data-testid="summary">
          {isExpanded ? summary : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
