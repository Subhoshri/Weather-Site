import React from 'react';
import "./Location.css";

const Location = ({ city, country }) => {
  return (
    <div className="location">
        <div className="exact">{city}</div>
        <div className="country">{country}</div>
    </div>
  );
};

export default Location;
