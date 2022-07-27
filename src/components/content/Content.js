import React from 'react';
import Clicks from './clicks/Clicks';
import "./content.scss"
import Sales from './sales/Sales';
import Searches from './searches/Searches';


const Content = () => (
  <div className='content-container'>
    <Searches/>
    <hr/>
    <Clicks/>
    <hr/>
    <Sales/>
  </div>
);

export default Content;
