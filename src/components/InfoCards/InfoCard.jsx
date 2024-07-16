import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudShowersHeavy, faDroplet, faTemperatureThreeQuarters, faWind } from "@fortawesome/free-solid-svg-icons";
import sunrise from "../../assets/sunrise.svg";

const iconmap = {
    "feels like": faTemperatureThreeQuarters,
    humidity: faDroplet,
    wind: faWind,
    rain: faCloudShowersHeavy,
};

export const InfoCard = ({ field, value }) => {
    const icon = iconmap[field.toLowerCase()];

    return (
        <div className="info-card">
            <div className="icon">
                {icon ? <FontAwesomeIcon icon={icon} /> : <span>No icon</span>}
            </div>
            <div className="value">{value}</div>
            <div className="field">{field}</div>
        </div>
    );
};

export function TimeCard({ time, amORpm, label = "Sunrise" }) {
    return (
        <div className="time-card">
            <div className="field">{label}</div>
            <div className="time">
                <img src={sunrise} alt={label} className="sun-icon" />
                <span>{time}</span>
                <span style={{ fontSize: "1rem" }}> {amORpm}</span>
            </div>
        </div>
    );
}
