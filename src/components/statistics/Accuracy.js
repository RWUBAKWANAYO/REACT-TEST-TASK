import React from "react";

const Accuracy = () => {
  return (
    <div className="accuracy-container">
      <ul>
        <li>
          <span>
            <div></div>
            <h3>Errors: 0,12% </h3>
          </span>
          <p>Average: 0,11%</p>
        </li>
        <li>
          <span>
            <div></div>
            <h3>Zeroes: 5,12% </h3>
          </span>
          <p>Average: 0,11%</p>
        </li>
        <li>
          <span>
            <div></div>
            <h3>Timeouts: 0,12% </h3>
          </span>
          <p>Average: 0,11%</p>
        </li>
      </ul>
    </div>
  );
};

export default Accuracy;
