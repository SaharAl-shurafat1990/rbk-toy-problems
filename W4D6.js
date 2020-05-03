//--------------------------------------
// //Q1-------
// function each (coll,fun){
//   if(Array.isArray(coll)){
//     for (var i =0;i<coll.length;i++){
//       fun(coll[i],i)
//     }
//   }else {for (var key in coll){
//   fun (coll[key],key)
//   }}
// }
// function reduce (array,fun,start){
//   var acc=start 
//   each(array,function (element){
//     acc=fun(acc,element)

//   })
//   return acc
// }
// //Q2------
// function sum(nums) {
//    return reduce(nums,function(start,element){
//      return start+element

//   },0)
// }
// //Q3---------
// function product(numbers) {
//   return reduce(numbers, function (start,number) { 
//              return start * number; 
//        }, 1) 
// }

// //Q4---
// var people = [ 
//        {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
//        {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
//        {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
//        {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
//        {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 

//  ];


// function averageAge(people) {
//   var y =  reduce(people,function(start,age){
//     return (start+age.age)
//   },0)
//    return y / people.length
// }
// //Q5---------
// function range(start, end) {
//    var acc = [];
//    for (var i = start; i < end; i++){
//       acc.push(i);
//    }
//    return acc;
// }


// function factorial(n) {
//   var array = range(1,n+1)
//    return reduce(array,function(start,element){
//     return start * element
//   },1)

// }


// // averageAge(people); // => 56.6
// //Q6----------
// function sumBy(numbers) { 
//     return reduce(numbers, function(start, elemnt){
//       return start + elemnt
//     },0)
//  } 
//  //Q7-----
//  function max(numbers){

//    return reduce(numbers,function(start,elment){
//      if(elment > start){
//        start = elment
//      }
//      return start 
//    },numbers[0])
//  }
//  //Q8--------
// function countOccurrences(string, character) {

// }

//  Improved Reduce 
//Q1--------

function each(coll, fun) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            fun(coll[i], i)
        }
    } else {
        for (var key in coll) {
            fun(coll[key], key)
        }
    }
}

function reduce(array, fun, start) {
    if (acc === undefined) {
        acc = array[0]
        array = array.slice(1)
    }
    var acc = start
    each(array, function(element, i) {
        acc = fun(acc, element, i)

    })
    return acc
}
//Q2-----
function range(start, end) {
    var acc = [];
    for (var i = start; i < end; i++) {
        acc.push(i);
    }
    return acc;
}

function factorial(n) {
    var array = range(1, n + 1)
    return reduce(array, function(start, element) {
        return start * element
    })

}
//Q3-----
function max(numbers, fun) {
    var max = numbers[0]
    return reduce(numbers, function(start, elment) {
        if (elment > max) {
            max = elment
        }
        return max
    })
}
//Q4-------