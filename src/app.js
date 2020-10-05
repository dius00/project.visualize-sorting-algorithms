/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const BubbleSort = require("./bubbleSort");
const Chart = require("chart.js");

//const Chart = require("Chart.js");
// A link to our styles!
require("./index.css");

const toBeOrdered = [10, 4, 6, 7, 1, 3, 9, 2, 5, 8];
const bubble = new BubbleSort(toBeOrdered);
//bubble.sort();

let ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
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
    responsive: true,
    aspectRatio	: 3,
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
//myChart.update();

/*
function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}*/

//const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
//document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
