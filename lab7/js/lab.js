// index.js - lab 7 functions
// author: Madison Navarro
// Date: 10/28/2024


// make function for sorting the name silly trick
function sortUserName() { 
    
// make window prompt
    var username = window.prompt("Hi Hi, can I get your name please to show you a trick?");
    console.log("username=", username);

// take the name split, sort, join it back together
    return username.split('').sort().join('');
}
// output of test
document.writeln("haha I was able to change your name: ",
    sortUserName(), "</br>");
