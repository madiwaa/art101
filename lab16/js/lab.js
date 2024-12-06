// lab 16 json and api
// Madison Navarro
// art101


// $.ajax({
//     //url requiest for api docs
//     url: "https://xkcd.com/614/info.0.json",
//     // the data to send that will be converted to jquery
//     data: {
//         "month": "7",
// "num": 614,
// "link": "",
// "year": "2009",
// "news": "",
// "safe_title": "Woodpecker",
// "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}",
// "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?",
// "img": "https://imgs.xkcd.com/comics/woodpecker.png",
// "title": "Woodpecker",
// "day": "24",
//         // post or get request?
//         type: "GET",
//         // type of dtat we want back
//         dataType : "JSON",
//         // what to do when api call succeeds(cheer, I hope this works!)
//         // the function
//         success: function(data){
//             //do something
//             console.log(data);
//         },
//         // what if it fails
//         error: function (jqXHR, textStatus, errorThrown) {
//             // do something
//             console.log("Error", )
//         }

//     }
// })

$(document).ready(function () {
    // AJAX call to XKCD API
    $.ajax({
        url: "https://xkcd.com/info.0.json", // API endpoint
        type: "GET", // Request type
        dataType: "json", // Expected data format
        success: function (comicObj) {
            console.log("API Call Successful!", comicObj);
            
            // Extract data from the JSON response
            const title = comicObj.title;
            const img = comicObj.img;
            const alt = comicObj.alt;

            // Append to the results section
            $("#output").html(comicHTML);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("API Call Failed:", textStatus, errorThrown);
            $("#output").html("<p>Failed to load the comic. Please try again later.</p>");
        }
    });
});