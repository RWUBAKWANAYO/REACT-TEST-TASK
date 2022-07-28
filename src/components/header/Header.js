import React, { useState } from "react";
import "./header.scss";
const Header = ({ handleClick }) => {
  const [active, setActive] = useState({ bg: "#2196F3", color: "#fff" });

  const toggleFunc = (status) => {
    setActive({ bg: "", color: "" });
    handleClick(status);
  };
  return (
    <div className="header-container">
      <h1>Main metrics</h1>
      <div>
        <button type="button" onClick={() => toggleFunc("last_hour")}>
          Last hour
        </button>
        <button type="button" onClick={() => toggleFunc("yesterday")}>
          Yesterday
        </button>
        <button
          type="button"
          style={{ backgroundColor: `${active.bg}`, color: `${active.color}` }}
          onClick={() => toggleFunc("last_three_days")}
        >
          Last 3 days
        </button>
      </div>
    </div>
  );
};

export default Header;
