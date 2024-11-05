// index.js - lab 9 Libraries and jQuery
// author: Madison Navarro
// Date: 11/04/2024

//add button
$("#challenge").append("<button id='button-challenge'>Make special</button>");
//add click listener to section button
$("#button-challenge").click(function(){
//add the special sectionfrom css when you click button
$("#challenge").toggleClass("special");
});
