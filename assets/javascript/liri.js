
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require('fs');




var type = process.argv[2]
var search = (process.argv.slice(3, process.argv.length)).join("+");


function findOnSpotify(song) {
    if (search === "") {
        search = "The Sign Ace of Base"
        num = 1
    }
    else {
        num = 10
    }
    console.log("Pulling up songs with the name :" + "'"+search+"'")
    spotify.search({ type: "track", query: search, limit: 10}, function (err, data) {
        if (err) {
            console.log("spotify error: " + err);
        }
        else {
            for (x=0; x < num; x++) {
            var results = data.tracks.items[x];
            console.log("\n ____________________________\n")
            console.log(" Name: " + results.name);
            console.log(" Artist: " + results.artists[0].name); 
            console.log(" Album: " + results.album.name);
            console.log(" Preview " + results.preview_url)
            }
        }
    });
};

function movieInfo(search) {
    if (search === "") {
        search = "Mr.Nobody"
    }
    console.log("\n Pulling up information about the film: " + "'"+ search)
    var queryUrl = "http://www.omdbapi.com/?t=" + search +"&y=&plot=short&apikey=e9f3bbc2";
    axios.get(queryUrl).then(function (response) {
        var results = response.data
        console.log("\n ____________________________\n")
        console.log(" Title: " + results.Title);
        console.log(" Release Year: " + results.Year);
        console.log(" Imdb Rating: " + results.imdbRating);
        console.log(" Produced in: " + results.Country);
        console.log(" Languages: " + results.Language);
        console.log(" Plot: " + results.Plot);
        console.log(" Actors: " + results.Actors);

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
    console.log("\n Pulling up tour dates for: " + "'"+ search+ "'")
    var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(function (response) {
        for (x=0; x < num; x++) {
            var results = response.data[x]
            console.log("\n ____________________________\n")
            console.log(" Venue: " + results.venue.name);
            console.log(" City: " + results.venue.city);
            console.log(" Date: " + results.datetime);
        }

    });
}

function pickRandom() {
    
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
    console.log(" node liri movie Braveheart");
    console.log(" node liri spotify Braveheart");
    console.log(" node liri concert Braveheart");
}

