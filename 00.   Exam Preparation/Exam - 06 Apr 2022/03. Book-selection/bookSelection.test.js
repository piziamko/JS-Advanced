// let bookSelection = require("./bookSelection.js");
// let { assert } = require("chai");

describe("Tests for bookSelection", function () {
  describe("Test for isGenreSuitable", () => {
    function concatenateStr(genre, age) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    }
    it("wrong genre", () => {
      let expectText = concatenateStr("Thriller", 12);
      assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectText);
      expectText = concatenateStr("Horror", 12);
      assert.equal(bookSelection.isGenreSuitable("Horror", 12), expectText);
    });
    it("correct genre and correct age", () => {
      let expText = "Those books are suitable";
      assert.equal(bookSelection.isGenreSuitable("Thriller", 13), expText);
      assert.equal(bookSelection.isGenreSuitable("Thriller", 25), expText);
      assert.equal(bookSelection.isGenreSuitable("Horror", 13), expText);
      assert.equal(bookSelection.isGenreSuitable("Horror", 25), expText);
      assert.equal(bookSelection.isGenreSuitable("Comedy", 25), expText);
      assert.equal(bookSelection.isGenreSuitable("Comedy"), expText);
    });
  });
  
  describe("Test for isItAffordable", () => {
    it("Don't have enough money", () => {
      assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
      assert.equal(bookSelection.isItAffordable(51, 50), "You don't have enough money");
    });
    it("Book bought", () => {
      assert.equal(bookSelection.isItAffordable(10, 11), "Book bought. You have 1$ left");
      assert.equal(bookSelection.isItAffordable(10, 10), "Book bought. You have 0$ left");
      assert.equal(bookSelection.isItAffordable(10, 50), "Book bought. You have 40$ left");
    });
    it("Wrong data type", () => {
        assert.throw(() => {bookSelection.isItAffordable("pesho", 10)}, "Invalid input");
        assert.throw(() => {bookSelection.isItAffordable("pesho", "gosho");}, "Invalid input");
        assert.throw(() => {bookSelection.isItAffordable("10", "10");}, "Invalid input");
        assert.throw(() => {bookSelection.isItAffordable(10, "10");}, "Invalid input");
    });
  });
  
  describe("Test for suitableTitles", () => {
    it("Wrong data type", () => {
      assert.throw(() => bookSelection.suitableTitles("gosho", "pesho"), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles(10, "pesho"), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles({}, "pesho"), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], []), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {}), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles({}, {}), "Invalid input");
      assert.throw(() => bookSelection.suitableTitles(10, 10), "Invalid input");
    });
    it("Correct data", () => {
      let input = [
        { title: "The Da Vinci Code", genre: "Thriller" },
        { title: "The Da Vinci Code1", genre: "Thriller" },
        { title: "The Da Vinci Code2", genre: "Horror" },
      ];
      let result = ["The Da Vinci Code", "The Da Vinci Code1"]
      assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), result.join(" "))
      result = ["The Da Vinci Code2"]
      assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), result.join(" "))
      result = [];
      assert.equal(bookSelection.suitableTitles(input, "Comedy").join(" "), result.join(" "))
    })
  })
});


// Variant 2

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

