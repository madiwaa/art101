/*
   Task: Working with your partner, experiment with JS events.
   Maker: Madison Navarro
   Date: 11 November 2024
*/

function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function(){

const userName = $("#user-name").val();

userNameSorted = sortString(userName);

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

