/*
   Task: using javascript in the web.
   Maker: Madison Navarro
   Date: 7 November 2024
*/


function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

// get a random starting index to slice the lorem ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

// generate the random lorem ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// adding an event listener
// clicker for your button
$("#Make-convo").click(function(){

//see what event listener does
// get new dialogue
    const newText = generateRandomText();

//append a new div to our div output
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
