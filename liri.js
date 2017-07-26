var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var spotify = require('spotify');

//Twitter
donsTweets = function() {
  var Twitter = require('twitter');
  var client = new Twitter(
    keys.twitterKeys
  );
  var params = {
    screen_name: 'bob_trollson'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (i = 0; i < 10; i++) {
        console.log(tweets[i].text);
      }
    }
  });
};
//omdb
var getMovies = function() {};
var movieName = "";
for (var i = 3; i < process.argv.length; i++) {
  //console.log(JSON.stringify(process.argv[i], undefined, 2));
  if (i > 3) {
    movieName += "+" + process.argv[i];
  } else {
    movieName = process.argv[i];
  }
}
request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  var myResults = JSON.parse(body);
  console.log(myResults.Title);
  console.log(myResults.Year);
  console.log(myResults.Rated);
  console.log(myResults.imdbRating);
  //  console.log(myResults.Ratings.Source);
  console.log(myResults.Country);
  console.log(myResults.Language);
  console.log(myResults.Plot);
  console.log(myResults.Actors);
});

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// Spotify
var donsSpotify = function () {
  var getSong = "";
  for (var i = 3; i < process.argv.length; i ++){
  console.log(JSON.stringify(process.argv[i], undefined, 2));
  if (i > 3){
  getSong+=" " + process.argv[i];
  }else{
    getSong = process.argv[i];
  }
}
  spotify.search({"type":"track","query":getSong,"limit":1}, function(err, data) {
  if (err) {
    console.log(err);
    console.log('Error occurred: ' + err);
    return;
  }

var getArtistNames = function(artist) {
  return artist.name;
};

var arrayOfResults = data.tracks.items;
arrayOfResults.forEach(function(track){
  console.log(track.preview_url);
  console.log(track.name);
  console.log(track.album.name);
  console.log(track.artists.map(getArtistNames));
});

});
};


var pick = function(caseData) {
  switch (caseData) {
    case "my-tweets":
      donsTweets();
      break;
    case "spotify-this-song":
      donsSpotify();
      break;
    case "movie-this":
      getMovies();
      break;
    case "do-what-it-says":
      readMe();
      break;
  }

};
//main process
pick(process.argv[2]);
