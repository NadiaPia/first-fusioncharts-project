// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];

const categories = [
  {
    category: [
      {
        label: "Q1"
      },
      {
        label: "Q2"
      },
      {
        label: "Q3"
      },
      {
        label: "Q4"
      }
    ]
}
];

const dataset = [
  {
    seriesname: "Previous Year",
    data: [
      {
        value: "10000"
      },
      {
        value: "11500"
      },
      {
        value: "12500"
      },
      {
        value: "15000"
      }
      ]
  },
  {
    seriesname: "Current Year",
    data: [
      {
        value: "25400"
      },
      {
        value: "29800"
      },
      {
        value: "21800"
      },
      {
        value: "26800"
      }
      ]
  }
];


export {chartData, categories, dataset}