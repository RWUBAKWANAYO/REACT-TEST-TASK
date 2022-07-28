import React from "react";
import Clicks from "./clicks/Clicks";
import "./content.scss";
import Sales from "./sales/Sales";
import Searches from "./searches/Searches";

const Content = ({ contentData }) =>
  contentData && (
    <div className="content-container">
      <Searches
        current={contentData.searches_current}
        previous={contentData.searches_previous}
      />
      <hr />
      <Clicks
        current={contentData.clicks_current}
        previous={contentData.clicks_previous}
        ctr = {contentData.ctr}
      />
      <hr />
      <Sales
        current={contentData.bookings_current}
        previous={contentData.bookings_previous}
        avg_price = {contentData.avg_price}
        str = {contentData.str}
      />
    </div>
  );

export default Content;
