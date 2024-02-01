const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    // beforeEach(function () {
    //   const testWord = new Word("testWord")
    // });

    it('should have a "word" property', function () {
      const testWord = new Word("testWord");
      expect(testWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const testWord = new Word("testWord");
      expect(testWord.word).to.equal(`testWord`);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const testWord = new Word("testWord");
      const result = testWord.removeVowels();
      expect(result).to.equal(`tstWrd`);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const testWord = new Word("testWord");
      const result = testWord.removeConsonants();
      expect(result).to.equal(`eo`);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const testWord = new Word("testWord");
      const result = testWord.pigLatin();
      expect(result).to.equal(`estWordtay`);
    });
  });
});
