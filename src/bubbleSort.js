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
    while (true) {
      this.changeTracker = false;

      for (let i = 0; i < this.arr.length - areInOrder; i++) {
        if (this.arr[i + 1]) {
          if (this.arr[i] > this.arr[i + 1]) {
            this.swap(this.arr[i], this.arr[i + 1]);
            this.changeTracker = true;
          }
        }
      }
      areInOrder++;
      //console.log(this.arr);
      if (!this.changeTracker) break;
    }
    return this.arr;
  }

  swap(higher, lower) {
    const highIndex = this.arr.indexOf(higher);
    this.arr.splice(highIndex, 2, lower, higher);
  }
}

module.exports = BubbleSort;
