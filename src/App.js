import './App.css';
// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Charts from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Colum2D from './Charts/Colum2D';
import Doughnut3D from './Charts/Doughnut3D';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// Create a JSON object to store the chart configurations


function App() {
  return (
    <div>
      <div className="App">
        <h1>Colum 2D</h1>
        <Colum2D ReactFC={ReactFC}/>
      </div>

      <div className="App">
        <h1>Doughnut 3D</h1>
        <Doughnut3D ReactFC={ReactFC}/>
      </div>

    </div> 
  );
}

export default App;

