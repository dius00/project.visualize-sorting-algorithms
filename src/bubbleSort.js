class BubbleSort {
  constructor(array) {
    this.arr = array;
    this.changeTracker = true;
  }

  sort() {
    let areInOrder = 0;
    const bubble = async () => {
      // eslint-disable-next-line no-constant-condition
      while (this.changeTracker) {
        this.changeTracker = false;
        for (let i = 0; i < this.arr.length - areInOrder; i++) {
          if (this.arr[i + 1]) {
            if (this.arr[i] > this.arr[i + 1]) {
              await timeout(300);
              addData(window.myChart, this.arr, i);
              this.swap(this.arr[i], this.arr[i + 1]);
              this.changeTracker = true;
              await timeout(300);
              addData(window.myChart, this.arr, i);
              await timeout(300);
            }
          }
        }

        areInOrder++;
        //if (!this.changeTracker) break;
      }
    };
    bubble();
    return new Promise.resolve(true);
  }

  swap(higher, lower) {
    const highIndex = this.arr.indexOf(higher);
    this.arr.splice(highIndex, 2, lower, higher);
  }
}

function timeout(ms) {
  //pass a time in milliseconds to this function
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function addData(chart, values, index) {
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
  const red = "rgba(255, 99, 132, 1)";
  const redBack = "rgba(255, 99, 132, 0.5)";
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
  borderColor.splice(index, 2, red, red);
  backgroundColor.splice(index, 2, redBack, redBack);
  chart.data.labels = values.map((value) => numToLabel[value]);
  chart.data.datasets[0].borderColor = borderColor;
  chart.data.datasets[0].backgroundColor = backgroundColor;
  chart.data.datasets.data = values;
  chart.update();
}

module.exports = BubbleSort;
