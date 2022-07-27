import React from 'react'
import SalesIcon from './SalesIcon';

const Sales = () => {
  return (
    <div className="searches-container">
      <div className="first-wrapper">
        <SalesIcon/>
        <div>
          <span className="wrapper-start">
            <h2>Sales</h2>
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
        <h2>STR: 6.2%</h2>
        <h2>Avg. Check: 8 903₽</h2>
        <p>Conversion from cliks  to bookings on all devices.</p>
        <h5>
          <span>Help:</span> Searches, Pessimisation
        </h5>
      </div>
    </div>
  );
}

export default Sales
