const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  // const apple = new Word('apple')
  let apple;
  let banana;
  beforeEach(() => {
    apple = new Word('apple');
    banana = new Word('banana');
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(apple).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(apple.word).to.equal('apple');
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      expect(apple.removeVowels()).to.equal('ppl');
      expect(banana.removeVowels()).to.equal('bnn');

    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(apple.removeConsonants()).to.equal('ae');
      expect(banana.removeConsonants()).to.equal('aaa');
    });
  });

  describe("pigLatin function", function () {
    // const rhythm = new Word('rhythm')
    // console.log(rhythm.pigLatin())
    it("should return the word converted to pig latin", function () {
      expect(apple.pigLatin()).to.equal('appleyay');
      expect(banana.pigLatin()).to.equal('ananabay');
      // expect(rhythm.pigLatin()).to.equal('rhythmay');
    });
  });
});
