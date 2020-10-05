//const toBeOrdered = [10, 4, 6, 7, 1, 3, 9, 2, 5, 8];
// eslint-disable-next-line no-unused-vars
class BubbleSort {
  constructor(array) {
    this.arr = array;
    this.bubble = [null, null];
    this.changeTracker = true;
  }

  sort() {
    let areInOrder = 0;
    // eslint-disable-next-line no-constant-condition
    const bubble = async () => {
      while (true) {

        this.changeTracker = false;

        for (let i = 0; i < this.arr.length - areInOrder; i++) {
          if (this.arr[i + 1]) {
            if (this.arr[i] > this.arr[i + 1]) {
              this.swap(this.arr[i], this.arr[i + 1]);
              this.changeTracker = true;
              await timeout(300);
              addData(window.myChart, this.arr);
              await timeout(300);



            }
          }
        }

        areInOrder++;
        //console.log(this.arr);
        if (!this.changeTracker) break;
      }
    }
    bubble();
    return this.arr;
  }

  swap(higher, lower) {
    const highIndex = this.arr.indexOf(higher);
    this.arr.splice(highIndex, 2, lower, higher);
  }
}


const delay = ms => new Promise(res => setTimeout(res, ms));

function timeout(ms) { //pass a time in milliseconds to this function
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  chart.data.labels = values.map((value) => numToLabel[value]);
  chart.data.datasets.data = values;
  chart.update();
}

module.exports = BubbleSort;
