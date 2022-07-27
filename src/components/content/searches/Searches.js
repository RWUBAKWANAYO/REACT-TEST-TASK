import React from "react";
import SearchIcon from "./SearchIcon";
const Searches = () => {
  return (
    <div className="searches-container">
      <div className="first-wrapper">
        <SearchIcon />
        <div>
          <span className="wrapper-start">
            <h2>Searches</h2>
            <span className="percent-badge green-badge">-13%</span>
          </span>

          <span className="wrapper-middle">
            <h3>29 380</h3>
            <p>Yesterday</p>
          </span>

          <span className="wrapper-end">
            <h3>27 985</h3>
            <p>Last friday</p>
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
