import React from "react";
import "./Statistics.scss";
import Accuracy from "./Accuracy";
import Chart from "./Chart";

const Statistics = ({ statisticsData }) =>
  statisticsData && (
    <>
      <Accuracy 
      error_percent={statisticsData.error_percent} 
      zeroes={statisticsData.zeroes} 
      timeout={statisticsData.timeout} 
      />
      <Chart 
      errors={statisticsData.errors} 
      total_count={statisticsData.total_count} 
      />
    </>
  );

export default Statistics;
