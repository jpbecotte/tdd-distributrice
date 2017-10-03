const z = require('../src/index.js');
const expect = require("chai").expect;

describe('Tests de distributrice', function() {
  it('should be a function', function() {
    expect(z).is.a('function');
  });
  it('should return an object', function() {
    const result = z(2, 3);
    expect(result).is.an('object');
  });
  it('should throw an error if two first arguments not numbers', function() {
    expect(function () {
      const result = z();
    }).to.throw();
    expect(function () {
      const result = z(1);
    }).to.throw();
    expect(function () {
      const result = z(undefined, 1);
    }).to.throw();
    expect(function () {
      const result = z('abc', 'def');
    }).to.throw();
    expect(function () {
      const result = z(NaN, NaN);
    }).to.throw();

  });
  it('Montant should be equal or higher than cout', function() {
    expect(function () {
      const result = z(10, 9);
    }).to.throw();
    expect(function () {
      const result = z(10, 10);
    }).to.not.throw();
  });
  it('Montant should be higher than 0', function() {
    expect(function () {
      const result = z(-10, 9);
    }).to.throw();
  });
  it('Should return an empty object if cout is equal to recu', function() {
    const result = z(10,10);
    expect(result).to.deep.eq({})
  });
  it('Should return a 0.05x1', function(){
    const result = z(0.95,1);
    expect(result).to.deep.eq({
      0.05: 1
    })
  });
  it('Should return a 0.05x1 and 0.10x1', function(){
    const result = z(0.85, 1);
    expect(result).to.deep.eq({
      0.05: 1,
      0.10: 1
    })
  });
  it('Should return a complex object with other values', function(){
    const result = z(3.5, 20);
    expect(result).to.deep.eq({
      1: 1,
      0.25: 2,
      10: 1,
      5: 1,
    })
  });
});

