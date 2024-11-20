/*
   Task: Working with your partner, create a function that depends on conditionals.
   Maker: Madison Navarro
   Date: 18 November 2024
*/

console.log('lab.js is running');

 var maxFactors = 4;

outputEl = document.getElementById("output");

//gets input field with 0,1,2,3
// returns object
//  {3: "fizz", 5: "buzz", 7: "boom"}

function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        // dont use if either value is blank, redo!!
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    // make it return
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    outputEl.appendChild(newEl);
}

//give a number and object
// ex: {3: "fizz", 5: "buzz", 7: "boom"}

// make fixxbuzzboom loop

function fizzBuzzBoom(maxNums, factorObj) {
    // look at all of the numbers
    for (var num=0; num<maxNums; num++) {
        debugger;
        // reset output string
        var outputStr = "";
        // look over numbers we got from the html
        for (var factor in factorObj) {
            // check if the number is a multiple of the factor
            if (num % factor == 0) {
                // if yes, then add text to fill teh number space in the string
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if(! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error page if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max,factorObj);
    outputEl.classList.add("cols");
})