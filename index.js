let _ = {
  clamp: function (number, lowerbound, upperbound) {
   let largerValue = Math.max(number, lowerbound)
   let smallervalue = Math.min(largerValue, upperbound)
   return smallervalue;
  },
  inRange: function (number, startvalue, endvalue) {
    if (endvalue === undefined){
      endvalue = startvalue
      startvalue = 0;
    }
    if (startvalue > endvalue){
      var temp = endvalue
      endvalue = startvalue
      startvalue = temp;
    }
    var isInRange = startvalue <= number && number < endvalue;
    return isInRange;
  },
  words: function (string) {
    var words = string.split(' ')
    return words;
  },
  pad: function (string, length) {
    if (length <= string.length) {
      return string
    }
    var frontpadding = Math.floor((length - string.length) / 2);
    var backpadding = length - string.length - frontpadding;
    var paddedstring = ' '.repeat(frontpadding) + string + ' '.repeat(backpadding);
    return paddedstring;
  },
  has: function(object, key) {
    return object[key] !== undefined
  },
  invert: function(object) {
    const newObject = {}
    for (const key in object) {
      var value = object[key];
      newObject[value] = key;
    }
    return newObject;
  },
  findKey: function(object, predicate) {
    for (const key in object) {
      var value = object[key];
      var predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key
      }
    }
    return undefined;
  },
  drop: function(array, numItems = 1) {
    return array.filter(function(element, index) {
      return index >= numItems
    })
  },
  dropWhile: function(array, predicate) {
    let hasFalseBeenFound = false;
    return array.filter(function(element, index){
      var predicateValue = predicate(element, index, array);
      if (predicateValue === false || hasFalseBeenFound === true) {
        hasFalseBeenFound = true;
        return true;
      }
      return false;
    });
  },
  chunk: function(array, size = 1) {
    const bigArray = [];
    let smallArray = [];
    for (i = 0; i < array.length; i++){
      smallArray.push(array[i])
      if (smallArray.length === size) {
        bigArray.push(smallArray);
        smallArray = [];
      }
    }
    if (smallArray.length > 0){
      bigArray.push(smallArray)
    }
     return bigArray;
  }
}

// Do not write or modify code below this line.
module.exports = _;
