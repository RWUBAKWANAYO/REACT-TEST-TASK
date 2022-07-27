import React from 'react'

const Chart = () => {
  return (
    <div className='chart-container'>
      <div className='chart-bar'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='chart-badge'>
        <span><div></div><h4>Error 500: 1 256</h4></span>
        <span><div></div><h4>Error 501: 800</h4></span>
        <span><div></div><h4>Error 502: 650</h4></span>
        <span><div></div><h4>Other: 330</h4></span>
      </div>
    </div>
  )
}

export default Chart