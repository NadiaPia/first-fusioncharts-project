import './App.css';
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Colum2D from './Charts/Colum2D';
import Doughnut3D from './Charts/Doughnut3D';
import Mult from './Charts/Mult';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

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

      <div className="App">
        <h1>Multi-series Column 2D chart</h1>
        <Mult ReactFC={ReactFC}/>
      </div>
    </div>
  );
}

export default App;

