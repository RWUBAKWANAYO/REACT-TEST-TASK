import React from 'react'
import SalesIcon from './SalesIcon';

const Sales = ({current, previous,str,avg_price}) => {
  return (
    <div className="searches-container">
      <div className="first-wrapper">
        <SalesIcon/>
        <div>
          <span className="wrapper-start">
            <h2>Sales</h2>
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
        <h2>STR: {str.toFixed(2)}%</h2>
        <h2>Avg. Check: {avg_price.toFixed(2)}₽</h2>
        <p>Conversion from cliks  to bookings on all devices.</p>
        <h5>
          <span>Help:</span>  STR, Bookings, Avg. Check
        </h5>
      </div>
    </div>
  );
}

export default Sales
