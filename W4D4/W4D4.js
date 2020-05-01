/*
1- Write a function called countNumOfStrings that takes an array of mixed elements (different data types) 
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/

function each(coll, f) {
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      f(coll[i], i); 
    } 
  } else { 
     for (var key in coll) { 
       f(coll[key], key); 
     } 
   } 
 } 

var countNumOfStrings = function(array) {
	var count = 0; //string counter
	each(array, function(element) {
		if (typeof element === "string"){
			count++
		}
	})
	return count;
}
/*
2- Write a function called  listLengthOfAllWords that takes an array of words (strings), 
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5, 1, 3, 4];
*/

var listLengthOfAllWords = function(array) {
	var lengthOfelement = []; //array to store elements length
	 each(array,function(element) {
		lengthOfelement.push(element.length);
	})
	return lengthOfelement;
}
/*
Write a function called flipPairs that takes a string a parameter 
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
 */
var flipPairs = function(string) {
	var splitString = string.split("");
	var reverseString = splitString.reverse();
	var joinString = reverseString.join("");
	return joinString;
}