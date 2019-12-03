import React from 'react';
import data from './data';
import Card from './Card';

export default () => (
  <div className="card-container">
    {
      data.map((d) => <Card {...d} />)
    }
  </div>
);
