/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
//const updt = require("./bubbleToChart");
const BubbleSort = require("./bubbleSort");
const Chart = require("chart.js");

//const Chart = require("Chart.js");
// A link to our styles!
require("./index.css");

const toBeOrdered = [10, 4, 6, 7, 1, 3, 9, 2, 5, 8];
const bubble = new BubbleSort(toBeOrdered);
//bubble.sort();

let ctx = document.getElementById("myChart").getContext("2d");
window.myChart = new Chart(ctx, {
  type: "bar",
  data: {
    // eslint-disable-next-line prettier/prettier
    labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
    datasets: [
      {
        label: "#",
        data: bubble.arr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
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
          "rgba(255, 99, 132, 1)",
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
const updt = (myChart) => {
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
  function addData(chart, values) {
    chart.data.labels = values.map((value) => numToLabel[value]);
    chart.data.datasets.data = values;
    chart.update();
  }
  console.log("here");
  bubble.sort();
  addData(myChart, bubble.arr);
};

const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

async function repeatedGreetingsLoop() {
  for (let i = 1; i <= 5; i++) {
    await sleepNow(1000);
    console.log(`Hello #${i}`);
  }
}

let btn = document.getElementById("update");
btn.onclick = () => bubble.sort();
