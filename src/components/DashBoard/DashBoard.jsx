import React, { useState, useEffect } from 'react';
import Location from "../location/Location";
import Banner from "../banner/Banner";
import { InfoCard, TimeCard } from "../InfoCards/InfoCard";
import DateTime from "../DateTime/DateTime";

import "./DashBoard.css";
import SearchBar from "../searchbar/Searchbar";


const DashBoard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ city: 'New York', country: 'USA' });

  useEffect(() => {
    const fetchWeatherData = () => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        fetch('https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=zbLq2Hezu7iwWp3KoU1QXEKmxnoDopC0', options)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(err => {
        setError(err);
        console.error(err);
      });
    };
    fetchWeatherData();
  }, [location]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }
  return (
    <div>
        <SearchBar setLocation={handleLocationChange} />

        <div className="dashboard">
            <div className="maincol">
                <Location city={location.city.toUpperCase()} country={location.country.toUpperCase()}/>
                <Banner max={30} min={20} temperature={25} status={"Amazing weather"} />
                <div className="stats">
                    <InfoCard field="humidity" value="100%" />
                    <InfoCard field="wind" value="100%" />
                    <InfoCard field="rain" value="100%" />
                    <InfoCard field="feels like" value="100%" />
                </div>
            </div>
            <div className="sidecol">
                <DateTime />
                <TimeCard time={"6:29"} amORpm={"AM"} />
                <TimeCard time={"7:29"} amORpm={"PM"} />
            </div>
        </div>
    </div>
    );
}

    


export default DashBoard;
