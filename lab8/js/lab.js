// index.js - lab 8 Anon functions and callbacks
// author: Madison Navarro
// Date: 10/30/2024


// plus 10 function
function plus10(x) {
    var results = x +10
    return results;
}

// test plus 10 function with console.log
console.log("whats 12 plus 10?? ", plus10(12));
console.log("whats 3 plus 10?? ", plus10(3));

// adding an array and test
array = [30, 15, 47, 1000]
console.log("my array: ", array);

// map the array
var results = array.map(plus10);
// will return back with: array(4) [40, 25, 57, 1010] TAKEN FROM CONSOLE

console.log("If you add 10 to the array you get ", results);

// new function!
var results = array.map(function(x) {
    var results = x -20
    return results;
});

// will return with array(4) [10, -5, 27, 980]
