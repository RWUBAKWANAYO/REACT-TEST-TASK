import React from 'react'
import ClickIcon from './ClickIcon'

const Clicks = ({current, previous,ctr}) => {
  return (
    <div className="searches-container">
    <div className="first-wrapper">
      <ClickIcon/>
      <div>
        <span className="wrapper-start">
          <h2>Clicks</h2>
          <span className="percent-badge red-badge">-13%</span>
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
      <h2 style={{color:"#FF6A67"}}>CTR: {ctr.toFixed(2)}%</h2>
      <p>Conversion from searches  to clicks on all devices.</p>
      <h5>
        <span>Help:</span> CTR, Cliks
      </h5>
    </div>
  </div>
  )
}

export default Clicks