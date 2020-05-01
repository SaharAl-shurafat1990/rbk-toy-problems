// //   Filter
// //Q1-------------
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

function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function(elment, key) {
        acc[key] = (f(elment, key));
    })
    return acc;
}

function filter(coll, predicate) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {}
        each(coll, function(elemnt, key) {
            if (predicate(elemnt, key)) {
                acc[key] = (elemnt);
            }
        })
    } else each(coll, function(elemnt, key) {
        if (predicate(elemnt, key)) {
            acc.push(elemnt)
        }
    })
    return acc;
}
//Q2--------------
function evens(numbers) {
    return filter(numbers, function(elemnt) {
        return elemnt % 2 === 0;
    })
}
//Q3------------
function multipleOf3(numbers) {
    return filter(numbers, function(elemnt) {
        return elemnt % 3 === 0;
    })
}
//Q4------------
function positives(numbers) {
    return filter(numbers, function(elemnt) {
        return elemnt > 0
    })
}
//Q5------------
function evenLength(strings) {
    return filter(strings, function(elemnt) {
        return elemnt.length % 2 === 0;
    })
}
//Q6-----------
function odd(numbers) {
    return filter(numbers, function(element) {
        return element % 2 !== 0;
    })
}

function negatives(numbers) {
    return filter(numbers, function(elemnt) {
        return elemnt < 0;
    })
}

function largerThanSix(numbers) {
    return filter(numbers, function(element) {
        return element > 6;
    })
}
// //Q7---------
var words = 'the quick brown fox jumps over the lazy dog'.split(' ');

function startWithChar(strings, character) {
    return filter(strings, function(strings) {
        return strings.startsWith(character);
    })
}
//Q8--------
function evenIndexedEvenLengths(strings, index) {
    return filter(strings, function(element, index) {
        return element.length % 2 === 0 && index % 2 === 0
    })
}
//Q9---------
// filter ( {a:1, b:"dog", c:true}, function(value) {

//   return typeof value === 'number'; } )
//Q10--------
function moveZero(numbers) {
    var newArr = filter(numbers, function(element) {
        return element === 0
    });

    var newArr2 = filter(numbers, function(element) {
        return element !== 0
    });
    return newArr2.concat(newArr)
}
//Q11--------
//------------------------------
// Review Questions
//Q1---------

var arrayKeys = ["a", "b"]
var obj = {}
Object.assign(obj, arrayKeys)

function select(object, arrayKeys) {
    return filter(object, function(object, keys) {
        return object[keys] === obj[keys]
    })
}