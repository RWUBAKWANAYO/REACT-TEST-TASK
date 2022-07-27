import React from 'react'
import ClickIcon from './ClickIcon'

const Clicks = () => {
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
      <h2 style={{color:"#FF6A67"}}>CTR: 0,04%</h2>
      <p>You get 100% traffic on mobile and desktop devices.</p>
      <h5>
        <span>Help:</span> Searches, Pessimisation
      </h5>
    </div>
  </div>
  )
}

export default Clicks