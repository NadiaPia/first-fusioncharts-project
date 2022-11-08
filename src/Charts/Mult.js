import React from 'react'
import { categories, dataset } from '../data';

function Mult({ReactFC}) {
  const chartConfigs = {
    type: "mscolumn2d",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Comparison of Quarterly Revenue",
        xAxisname: "Quarter",
        yAxisName: "Revenues (In USD)",
        numberPrefix: "$",
        plotFillAlpha: "80",
        theme: "fusion",
        divLineIsDashed: "1",
        divLineDashlen: "1",
        divLineGaplen: "1"
      },
      // Chart Data 
      categories: categories,
      dataset: dataset,
    }
  };

  return <ReactFC {...chartConfigs} />;
}

export default Mult