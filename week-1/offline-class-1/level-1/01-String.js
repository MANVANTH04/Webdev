// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}

getLength('hello');

// string function - 1 :- get length = str.length

// here we can basically get the length of the string in two ways. one is the 
// str.length and the second one is the getlength(str)


// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));

}
// string's another function is index. 
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// index functions of string:-  str.indexOf() , str.lastIndexOf()-- which returns the value of the target which occurs at the last. 

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// slicing we already know that. we have to basically give the start index and the end index based on that we can get a slice of the string. 
// str.slice(0,10)

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World, World is very beautiful", "World", "JavaScript");
// this is some unpopular function. so this will just replace the text we wanted to replace
// it will only replace the first occurance of the target. if there are multiple then this wont work. str.replace(target,replacement)

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// this is a very common fuction. we just have to select the condition to split. str.split(" ")and it returns the array.

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello    World ");

// remove the empty string only in the beginning and the ending of the string. str.trim()

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

// str.toUpperCase() and the str.toLowerCase() are basically just normal functions. which retunrs the uppear and lowercase values 