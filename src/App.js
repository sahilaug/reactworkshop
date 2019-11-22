import React from 'react';
import data from './data';


const a = 10;

export default function App() {
  return (


    <div className="card-container">
      {
        data.map((d) => <Card {...d} />)
      }
    </div>
  );
}

const Card = ({ show: { name, image: { medium } } }) => (
  <div className="card p20">
    <img alt={name} src={medium} className="card-banner-img" />
    <div>
      <span>{name}</span>
    </div>
  </div>
);
