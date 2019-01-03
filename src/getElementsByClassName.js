// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { //What we're searching for
  var result = [];
  var body = document.body //inside of the body of the html file
  //Check if the classList exists and to see if it's included in the classList === className
  // --> how is this done recursively?
  var searchValue = function(body) {
    if (body.classList && body.classList.contains(className)) {
      result.push(body)
      console.log(body)
       //console.log(body.classList)
    } //array?
  //childnodes and the classList
//.contains()
    if (body.childNodes.length >= 1) { //how we check if something exists in jQuery
      for (var i = 0; i < body.childNodes.length; i++) {
        var currentValue = body.childNodes[i];
        searchValue(currentValue);
      }

    } //childNodes = [];
  }
  searchValue(body);
  return result;

};


// Html --> <head> and <body>
// parent body has many children --> children are nodes
// child nodes, common way to refer to/look for them
// IN body, check to see if it has the id & see if it has any children
// then iterate over each ul & do same check
// also see if ul has any children & check children
// job done at each check stage is the same
// point of recursion is to navigate around this structure
