import { React, useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { LastHourFunc } from "./redux/metricsData";
import { LastThreeDaysFunc } from "./redux/metricsData";
import { YesterdayFunc } from "./redux/metricsData";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Statistics from "./components/statistics/Statistics";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LastThreeDaysFunc());
  }, [dispatch]);

  const handleClick = (status) => {
    if (status === "last_hour") return dispatch(LastHourFunc());
    if (status === "yesterday") return dispatch(YesterdayFunc());
    if (status === "last_three_days") return dispatch(LastThreeDaysFunc());
  };

  const contentData = useSelector((state) => state.metrics_data.info);
  const statisticsData = useSelector((state) => state.metrics_data.metrics);
  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <Statistics statisticsData={statisticsData} />
      <Content contentData={contentData} />
    </div>
  );
}

export default App;
