import React from 'react';
import data from './data';

export default function App() {
  return (
    <div className="card-container">
      {
        data.map((d) => <Card {...d} />)
      }
    </div>
  );
}

const Card = ({ show }) => {
  const { name, image } = show;
  const { medium } = image;
  return (
    <div className="card p20">
      <img alt={name} src={medium} className="card-banner-img" />
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};
