import React from "react";
import SearchIcon from "./SearchIcon";
const Searches = ({current, previous}) => {
  return (
    <div className="searches-container">
      <div className="first-wrapper">
        <SearchIcon />
        <div>
          <span className="wrapper-start wrapper-with-badge">
            <h2>Searches</h2>
            <span className="percent-badge green-badge">+5%</span>
          </span>

          <span className="wrapper-middle">
            <h3>{current.value}</h3>
            <p>{current.name}</p>
          </span>

          <span className="wrapper-end">
            <h3>{previous.value}</h3>
            <p>{previous.name}</p>
          </span>
        </div>
      </div>
      <div className="second-wrapper wrapper-start">
        <h2>Mobile traffic: 100%</h2>
        <h2>Web traffic: 100%</h2>
        <p>You get 100% traffic on mobile and desktop devices.</p>
        <h5>
          <span>Help:</span> Searches, Pessimisation
        </h5>
      </div>
    </div>
  );
};

export default Searches;
