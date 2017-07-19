var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

function assertNotNull(element) {
  if (element === null) {
    throw new Error("Assertion failed: " + element + "is null");
  }
}

function it(text, callback) {
  callback();
  console.log("Test passed: " + text)
}
