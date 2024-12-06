// to make it random
const randomPokemonId = Math.floor(Math.random() * 1010) + 1;

$.ajax({
    // Correct URL
    url: `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`, 
    // GET request
    type: "GET",
    //  JSON data
    dataType: "json",
  })
    // Success response
    .done(function(data) {
      console.log(data);
      $("#output").html(`<h1>${data.name}</h1>`); // Pokémon name
      $("#output").append(`<img src="${data.sprites.front_default}" alt="${data.name}">`); // Pokémon sprite
    })
    // Failed response
    .fail(function(xhr, status, errorThrown) {
      console.error("Error: " + errorThrown + " Status: " + status);
      $("#output").html("<p>Failed to catch the Pokémon</p>");
    });