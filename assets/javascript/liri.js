
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require("./keys.js");
var chalk = require('chalk')
var spotify = new Spotify(keys.spotify);
var fs = require('fs');




var type = process.argv[2]
var search = (process.argv.slice(3, process.argv.length)).join("+");


function findOnSpotify(search) {

    if (search === "") {
        search = "The Sign Ace of Base"
        num = 1
    }
    else {
        num = 10
    }

    var text = " Pulling up songs with the name :" + "'"+search+"'"
    fs.appendFile("log.txt", text, function (err) {
        if (err){
            console.log("error")
        }
        console.log(chalk.yellow(text));
    });
    spotify.search({ type: "track", query: search, limit: 10}, function (err, data) {
  
        if (err) {
            console.log("spotify error: " + err);
        }
        else {
            for (x=0; x < num; x++) {
                var results = data.tracks.items[x];
                var info = [
                "\n ____________________________\n",
                " Name: " + results.name,
                " Artist: " + results.artists[0].name,
                " Album: " + results.album.name,
                " Preview: " + results.preview_url
                ].join("\n")
                
                console.log(chalk.gray(info))
            }

            fs.appendFile("log.txt", info, function (err) {
                if (err){
                    console.log("error")
                }
            });
        }
    });
};

function movieInfo(search) {
    if (search === "") {
        search = "Mr.Nobody"
    }
   
    var text = "\n\n\n Pulling up information about the film: " + "'"+ search +"'"
    fs.appendFile("log.txt", text, function (err) {
        if (err){
            console.log("error")
        }
        console.log(chalk.yellow(text));
    });
    var queryUrl = "http://www.omdbapi.com/?t=" + search +"&y=&plot=short&apikey=e9f3bbc2";
    axios.get(queryUrl).then(function (response) {
        var results = response.data

        var info = [
        "\n ____________________________\n",
        " Title: " + results.Title,
        " Release Year: " + results.Year,
        " Imdb Rating: " + results.imdbRating,
        " Produced in: " + results.Country,
        " Languages: " + results.Language,
        " Plot: " + results.Plot,
        " Actors: " + results.Actors
        ].join("\n")

        console.log(chalk.gray(info))

        fs.appendFile("log.txt", info, function (err) {
            if (err){
                console.log("error")
            }
        });
        
    });
}

function concertInfo(search) {
    if (search === "") {
        search = "The Who"
        num = 1
    }
    else {
        num = 10
    }
    var text = "\n\n\n Pulling up tour dates for: " + "'"+ search+ "'"
    fs.appendFile("log.txt", text, function (err) {
        if (err){
            console.log("error")
        }
        console.log(chalk.yellow(text));
    });
    var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(function (response) {
        for (x=0; x < num; x++) {
            var results = response.data[x]
            var info = [
            "\n ____________________________\n",
            " Venue: " + results.venue.name,
            " City: " + results.venue.city,
            " Date: " + results.datetime,
            ].join("\n")

            console.log(chalk.gray(info));

            fs.appendFile("log.txt", info, function (err) {
                if (err){
                    console.log("error")
                }
            });

        }

    });
}

function pickRandom() {
    fs.readFile("../../random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
        var randomNum = Math.floor(Math.random() * 3)
        var dataArr = data.split("\n");

        var splitArr = dataArr[randomNum].split(",")
        type = splitArr[0]
        search = splitArr[1]

        if (type === "spotify") {
            findOnSpotify(search)
        }
        else if (type === "movie") {
            movieInfo(search)
        }
        else if (type === "concert"){
            concertInfo(search)
        }
      });
}


if (type === "spotify") {
    findOnSpotify(search)
}
else if (type === "movie") {
    movieInfo(search)
}
else if (type === "concert"){
    concertInfo(search)
}
else if (type === "do-what-it-says") {
    pickRandom()
}
else  {
    console.log(" \n Type what category you are searching, followed by the name of the thing you are searching.");
    console.log(" For example:");
    console.log(" ____________________________\n")
    console.log(" node liri movie The Departed");
    console.log(" node liri spotify I want it that way");
    console.log(" node liri concert Bob Dylan");
}

