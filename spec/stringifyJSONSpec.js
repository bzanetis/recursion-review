// test cases are described in fixtures.js

// var stringifiableObjects = expect("fixtures.js")
// var unstringifiableValues = expect("fixtures.js")

describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

// console.log(stringifiableObjects);

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
      console.log(stringifiableObjects);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
