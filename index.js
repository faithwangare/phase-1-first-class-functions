const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

// The function that should be tested
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {}
}

function returnsAnAnonymousFunction() {
  return function () {}
}
