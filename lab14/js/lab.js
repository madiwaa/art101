// index.js - lab 9 Libraries and jQuery
// author: Madison Navarro
// Date: 11/04/2024

//add button for challenge
$("#challenge").append("<button id='button-challenge'>Click me!</button>");
//add click listener to section button
$("#button-challenge").click(function(){
//add the special sectionfrom css when you click button
$("#challenge").toggleClass("special");
});

//add button for problems
$("#Problems").append("<button id='button-Problems'>Click me!</button>");
//add click listener to section button
$("#button-Problems").click(function(){
//add the special sectionfrom css when you click button
$("#Problems").toggleClass("special");
});

//add button for reflection
$("#Reflection").append("<button id='button-Reflection'>Click me!</button>");
//add click listener to section button
$("#button-Reflection").click(function(){
//add the special sectionfrom css when you click button
$("#Reflection").toggleClass("special");
});

