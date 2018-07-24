var randomMovieArray = ['The Apartment', 'Vertigo', 'Breakfast at Tiffany’s', 'Grease', 'Gone with the Wind'];
function apiCall(){
  var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
  var randomMovie = randomMovieArray[randomNumber];
console.log(randomMovie);
  $.getJSON('http://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&h=600&apikey=454a6e93').then(function(response){
  var image = response.Poster;
console.log(image);
  if(image !== "N/A"){
    $('#adamsBack').attr('src', image);
    }

  });
}

$('#adamsFront').click(function(){
  apiCall();
});

$('.card').flip();