/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./bubbleSort");
const Chart = require("chart.js");

// A link to our styles!
require("./index.css");

const toBeOrdered = [10, 4, 6, 7, 1, 3, 9, 2, 5, 8];
let bubble = new BubbleSort(toBeOrdered);
//bubble.sort();

let ctx = document.getElementById("myChart").getContext("2d");
window.myChart = new Chart(ctx, {
  type: "bar",
  data: {
    // eslint-disable-next-line prettier/prettier
    labels: ["Ten", "Four", "Six", "Seven", "One", "Three", "Nine", "Two", "Five", "Eight"],
    datasets: [
      {
        label: "number",
        data: bubble.arr,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: {
      duration: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

let srtBtn = document.getElementById("sort");
//let rstBtn = document.getElementById("reset");

srtBtn.addEventListener("click", () => {
  bubble.sort();
});

// ONLY THE BRAVE ONES VENTURE PAST THIS LINE

/*
rstBtn.addEventListener("click", () => {
  bubble = new BubbleSort(toBeOrdered);
  addData(window.myChart, bubble.arr);
});


function addData(chart, values) {
  const numToLabel = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "10": "Ten",
  };
  const backgroundColor = [
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
  ];
  const borderColor = [
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)",
  ];
  chart.data.labels = values.map((value) => numToLabel[value]);
  chart.data.datasets[0].borderColor = borderColor;
  chart.data.datasets[0].backgroundColor = backgroundColor;
  chart.data.datasets.data = values;
  chart.update();
}
*/
