# LIRI


## Description

An application run in the terminal that takes an input to return information about movies, songs, and upcoming concerts using the omdb API, the Spotify API and the BandsInTown API respectively.

## Formatting

Examples of how to format queries in the terminal

1. To query a movie
  * node liri **movie** name of the movie
  * (ie. node liri movie braveheart)
2. To query a song
  * node liri **song** name of the band you want to pull up shows for
  * (ie. node liri song imagine)
3. To query a concert
  * node liri **concert** name of the band you want to pull up shows for
  * (ie. node liri concert rolling stones)
4. To pull up a random query from the random.txt file
  * node liri **do-what-it-says** name of the movie
  * (ie. node liri do-what-it-says)

## Preview

A video of the application running:

https://drive.google.com/file/d/1-pumgEo8c8g-cg27wegon40IhmpZiLRM/view

## Notes

This application requires node.js and a spotify API key to run. The spotify API key should be included in a .env file as shown below

  * SPOTIFY_ID=123456789123456789123456789

  * SPOTIFY_SECRET=123456789123456789123456789



