l-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.


loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S
  // done 
  
 

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d


function loopAString(string) {
<<<<<<< HEAD
   var index;
   var i =0
  while(i <= string.charAt(0)){
  	index = i
  console.log(index)
  }
  	  i++
=======
  // create an index variable
  // create a loop which iterates over the input string
  // log current string character to the console
  // increment value of index variable
  var i = 0;
  while(i<string.length){
    console.log(string.charAt(i));
    i++;
  }
>>>>>>> de431daccc1433e4b71cdf7a17747934fe226ecc
}


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here

function reverseStr(string){
  var result = ''
  var x =0;
  var i=string.length -1
  while(i>=0){
  
    result = result + string[i] + x
    i--; 
    x++;
  }
  return result
}

function reverseStr(string){
	var newStr= "";
	var i=string.length-1
	while =(i>=0){
		newStr += string[i]
		return newStr
	}
	  i--
}