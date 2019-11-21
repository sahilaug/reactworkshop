import React from 'react'
import data from './data';

export default function App() {
  return (
    <div className="card-container">
      {
        data.map(d => {
          return <Card {...d}></Card>
        })
      }
    </div>
  )
}

const Card = ({ show: { name, image: { medium } } }) => {
  return <div className="card p20">
    <img alt={name} src={medium} className="card-banner-img"></img>
    <div>
      <span>{name}</span>
    </div>
  </div>
}
