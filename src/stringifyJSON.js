// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var resultArr = [];
  if (typeof obj === 'function') {
    return null;
  } else if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'undefined') {
    return null;
  } else if (typeof obj === 'boolean') {
    return '' + obj + '';
  } else if (obj === null) {
    return "null";

  } else if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        resultArr.push(stringifyJSON(obj[i]))
      }
    return '[' + resultArr.join(',') + ']';
  } else if (typeof obj === 'object') {
      for (var key in obj) {
        if (stringifyJSON(obj[key]) !== null) {
          resultArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
    return '{' + resultArr.join(',') + '}';
  }
};




//run through each type of input
//checking typeof
//numbers, boolean  =  return '' + obj
//string = return '"' + obj + '"'

//array (Array.isArray)
  //create an empty []
  //use for loop to look inside input arr
    //push to result array -> use recursive call here
  //return '[' + result array.join(',') + ']'
//object
 //use for in loop
 //typeof && != undefined
 // if statement ->  === undefined or typeof function, continue
  //push key with stringifyJSON + ':' + obj[keys]
 //return '{' + result array.join(',') + '}'

//function, null