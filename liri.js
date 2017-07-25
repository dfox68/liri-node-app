var fs = require("fs");
var request = require("request");

//Twitter
fs.readFile("keys.js", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
        var Twitter = require('twitter');
        var params = {
          bob_trollson: 'nodejs'
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            console.log(tweets);
          }
        });

        //omdb
        var getMovies = function() {
          var movieName = process.argv[3];
          request('http://www.google.com', function(error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
          });
        };
        var readMe = function(
          fs.readFile("random.txt")

        )

        var pick = function(caseData) {
          switch (caseData) {
            case "my-tweets":
              twitter();
              break;
            case "spotify-this-song":
              break;
            case "movie-this":
              getMovies();
              break;
            case "do-what-it-says"
            readMe();
              break;
          }

        };
        //main process
        pick(process.argv[2]);
