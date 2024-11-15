/*
   Task: Working with your partner, create a function that depends on conditionals.
   Maker: Madison Navarro
   Date: 14 November 2024
*/
//gives you a house
function sortingHat(str) {
    leng = str.length;
    mod = leng % 4;

if (mod == 0){
    return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "hufflepuff";
    }
    else if (mod == 3) {
        return "Syltherin";
    }
}

// click listner for button
$("#submit").click(function() {
// checks input field
const name = $("#input").val();
//sort you out
house = sortingHat(name);
// adds text to fill response
$("#output").html('<div class="text"><p>You have been placed into ' + house + '! Enjoy your time there!!!</p></div>');
});