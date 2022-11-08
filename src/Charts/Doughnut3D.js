import React from 'react';
import { chartData } from '../data';

export default function Doughnut3D({ReactFC}) {
  const chartConfigs = {
    type: "doughnut3d",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Split of Revenue by Product Categories",
        subCaption: "Last year",
        numberPrefix: "$",
        theme: "fusion"
      },
      // Chart Data
      data: chartData,
    }
  };
  return <ReactFC {...chartConfigs} />;

}



