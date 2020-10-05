const BubbleSort = require("../src/bubbleSort");
const { expect } = require("chai");

describe("Sort", () => {
  const TargetArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const toBeOrdered = [10, 4, 6, 7, 1, 3, 9, 2, 5, 8];
  const bubble = new BubbleSort(toBeOrdered);
  it("should have a sort method", () => {
    expect(BubbleSort.prototype.sort).to.be.a("function");
  });
  it("should order the Array", () => {
    expect(bubble.sort()).to.be.eql(TargetArr);
  });
});
