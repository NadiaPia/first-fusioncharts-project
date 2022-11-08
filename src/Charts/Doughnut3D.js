import React from 'react';
import { chartData } from '../data';

export default function Doughnut3D({ReactFC}) {

  const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Split of Revenue by Product Categories",
        subCaption: "Last year",
        numberPrefix: "$",
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData,
    }
  };
  return <ReactFC {...chartConfigs} />;

}



