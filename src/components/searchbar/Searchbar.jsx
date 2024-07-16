import React, { useRef } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setLocation }) => {
    const cityRef = useRef(null);
    const countryRef = useRef(null);

    const handleSearch = () => {
        const city = cityRef.current.value;
        const country = 'Country';
        setLocation({ city, country });
    };

    return (
        <div className="searchbar">
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
            <input ref={cityRef} className="textfield" placeholder="Enter city" />
            <button onClick={handleSearch} className="button">
                <FontAwesomeIcon icon={faLocationDot} fontSize={'1.5rem'} />
            </button>
        </div>
    );
};

export default SearchBar;
