// index.js - arrays and objects 
// author: Madison Navarro
// Date: 10/23/2024

// Define varianbles 
const mytransportation = ["subaru", "bus", "skateboard"];

// making an object for main ride 
mymainride = { 
    make: "subaru",
    model: "outback",
    color: "silver/grey",
    year: "2006",  
    }

// output
document.writeln("I mainly get around with ", mytransportation, "</br>");
// write in object for the document
document.writeln("mymainride: <pre>",
  JSON.stringify(mymainride, null, '/t'), "</pre>");

