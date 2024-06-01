/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    vowels = ['a', 'e', 'i', 'o', 'u',"A","E","I","O","U"]
    var i ,count=0;
    for (i=0; i<str.length; i++){
        if (vowels.includes(str[i])){
          count+=1;
        }
    }
    return count 
}

module.exports = countVowels;