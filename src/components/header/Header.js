import React from "react";
import "./header.scss";
const Header = () => (
  <div className="header-container">
    <h1>Main metrics</h1>
    <div>
      <button type="button">Last hour</button>
      <button type="button">Today</button>
      <button type="button">Yesterday</button>
      <button type="button">Last 3 days</button>
    </div>
  </div>
);

export default Header;
