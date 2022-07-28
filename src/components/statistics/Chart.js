import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Chart = ({ errors, total_count }) =>(
  total_count > 0 ? (
    <div className="chart-container">
      <div className="chart-bar">
        {errors.map((el) => (
          <div key={uuidv4()} style={{ width: `${(el.count * 100) / total_count}%` }}></div>
        ))}
      </div>
      <div  className="chart-badge">
        {errors.map((el) => (
          <span key={uuidv4()}>
            <div></div>
            <h4>
              Error {el.code || "There is no code"}: {el.count}
            </h4>
          </span>
        ))}
      </div>
    </div>
  ) : (
      <h1 className="error-message">There's no chart !</h1>
  ));

export default Chart;
