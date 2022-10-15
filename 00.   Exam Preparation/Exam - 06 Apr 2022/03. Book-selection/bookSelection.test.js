// const bookSelection = require("./bookSelection.js");
// const assert = require("chai").assert;

// describe("bookSelection", function () {
//   describe("isGenreSuitable", function () {
//     it("should correct with genre novel and 20 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("novel", 20),
//         `Those books are suitable`
//       );
//     });
//     it("should correct with genre novel and 12 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("novel", 12),
//         `Those books are suitable`
//       );
//     });
//     it("should correct with genre Horror and 20 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("Horror", 20),
//         `Those books are suitable`
//       );
//     });
//     it("should correct with genre Horror and 12 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("Horror", 12),
//         `Books with Horror genre are not suitable for kids at 12 age`
//       );
//     });
//     it("should correct with genre Thriller and 20 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("Thriller", 20),
//         `Those books are suitable`
//       );
//     });
//     it("should correct with genre Thriller and 12 years", function () {
//       assert.equal(
//         bookSelection.isGenreSuitable("Thriller", 12),
//         `Books with Thriller genre are not suitable for kids at 12 age`
//       );
//     });
//   });
//   describe("isItAffordable", function () {
//     it("should buy book with budget > price", function () {
//       assert.equal(
//         bookSelection.isItAffordable(10.5, 20),
//         `Book bought. You have 9.5$ left`
//       );
//     });
//     it("should buy book with budget = price", function () {
//       assert.equal(
//         bookSelection.isItAffordable(10.5, 10.5),
//         `Book bought. You have 0$ left`
//       );
//     });
//     it("should not enough money with budget < price", function () {
//       assert.equal(
//         bookSelection.isItAffordable(20, 10.5),
//         "You don't have enough money"
//       );
//     });
//     it("should throw Error with budget not a number", function () {
//       assert.throw(
//         () => bookSelection.isItAffordable(20, "10"),
//         "Invalid input"
//       );
//     });
//     it("should throw Error with price not a number", function () {
//       assert.throw(
//         () => bookSelection.isItAffordable("20", 10),
//         "Invalid input"
//       );
//     });
//   });

//   describe("suitableTitles", function () {
//     const booksArray = [
//       { title: "test", genre: "test" },
//       { title: "test1", genre: "testov" },
//       { title: "test2", genre: "test" },
//       { title: "test3", genre: "testov" },
//       { title: "test4", genre: "test" },
//     ];
//     it("should correct array with booksArray and matching genre ", function () {
//       const expected = ["test1", "test3"];
//       assert.deepEqual(
//         bookSelection.suitableTitles(booksArray, "testov"),
//         expected
//       );
//     });
//     it("should empty array with booksArray and not matching genre ", function () {
//       const expected = ["test1", "test3"];
//       assert.deepEqual(bookSelection.suitableTitles(booksArray, "testove"), []);
//     });

//     it("should throw Error with wrong type bookArray", function () {
//       assert.throw(
//         () => bookSelection.suitableTitles({}, "novel"),
//         "Invalid input"
//       );
//     });
//     it("should throw Error with wrong type genre", function () {
//       assert.throw(
//         () => bookSelection.suitableTitles(booksArray, 2),
//         "Invalid input"
//       );
//     });
//   });
// });

let bookSelection = require("./bookSelection");
let { expect, assert } = require("chai");

describe(`bookSelection Tests`, () => {
  describe("Test .isGenreSuitable(genre, age)", () => {
    it('should return correct message if age is <= 12 and genre is "Thriller"', () => {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
    });
    it('should return correct message if age is <= 12 and genre is "Horror"', () => {
      expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(
        "Books with Horror genre are not suitable for kids at 10 age"
      );
    });
    it("should return correct message if age is > 12", () => {
      expect(bookSelection.isGenreSuitable("Horror", 16)).to.equal(
        "Those books are suitable"
      );
      expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(
        "Those books are suitable"
      );
    });
  });
  describe("Test .isItAffordable(price, budget)", () => {
    //You need to validate the input, if the price and budget are not a number, throw an error: "Invalid input".
    it("should throw error if price is not a number", () => {
      assert.throws(
        () => bookSelection.isItAffordable("twenty", 50),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable([], 50),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable({}, 50),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(null, 50),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(undefined, 50),
        "Invalid input"
      );
    });

    it("should throw error if budget is not a number", () => {
      assert.throws(
        () => bookSelection.isItAffordable(20, "fifty"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(30, []),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.isItAffordable(30, {}),
        "Invalid input"
      );
      assert.throws(() => bookSelection.isItAffordable(30), "Invalid input");
      assert.throws(
        () => bookSelection.isItAffordable(30, undefined),
        "Invalid input"
      );
    });

    it("should return correct message if enough money", () => {
      expect(bookSelection.isItAffordable(20, 20)).to.equal(
        "Book bought. You have 0$ left"
      );
      expect(bookSelection.isItAffordable(20, 55)).to.equal(
        "Book bought. You have 35$ left"
      );
    });

    it("should return correct message if NOT enough money", () => {
      expect(bookSelection.isItAffordable(30, 20)).to.equal(
        "You don't have enough money"
      );
      expect(bookSelection.isItAffordable(20, 19.5)).to.equal(
        "You don't have enough money"
      );
    });
  });

  describe("Test .suitableTitles(array, wantedGenre)", () => {
    it("should throw error if array is NOT an array", () => {
      assert.throws(
        () => bookSelection.suitableTitles("array", "Horror"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles(50, "Horror"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles({}, "Horror"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles(null, "Horror"),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles(undefined, "Horror"),
        "Invalid input"
      );
    });
    it("should throw error if genre is NOT string", () => {
      assert.throws(
        () => bookSelection.suitableTitles([], []),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles([], {}),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles([], 50),
        "Invalid input"
      );
      assert.throws(
        () => bookSelection.suitableTitles([], null),
        "Invalid input"
      );
      assert.throws(() => bookSelection.suitableTitles([]), "Invalid input");
    });

    it("should work properly with valid data", () => {
      let titles = [
        { title: "The Da Vinci Code", genre: "Thriller" },
        { title: "Lord Of The Rings", genre: "Fantasy" },
        { title: "Pet Semetary", genre: "Thriller" },
      ];
      let expected = ["The Da Vinci Code", "Pet Semetary"];
      expect(bookSelection.suitableTitles(titles, "Thriller")).to.deep.equal(
        expected
      );
      expect(bookSelection.suitableTitles(titles, "Fantasy")).to.deep.equal([
        "Lord Of The Rings",
      ]);
    });
  });
});