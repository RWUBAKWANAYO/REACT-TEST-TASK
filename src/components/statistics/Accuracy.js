import React from "react";

const Accuracy = ({error_percent, zeroes,timeout}) => {
  return (
    <div className="accuracy-container">
      <ul>
        <li>
          <span>
            <div></div>
            <h3>Errors: {error_percent.toFixed(2)}%</h3>
          </span>
          <p>Average: None</p>
        </li>
        <li>
          <span>
            <div></div>
            <h3>Zeroes: {zeroes.toFixed(2)}%</h3>
          </span>
          <p>Average: None</p>
        </li>
        <li>
          <span>
            <div></div>
            <h3>Timeouts: {timeout.toFixed(2)}%</h3>
          </span>
          <p>Average: None</p>
        </li>
      </ul>
    </div>
  );
};

export default Accuracy;
