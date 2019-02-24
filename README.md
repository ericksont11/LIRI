# LIRI


## Description

An application run in the terminal that takes user inputs to return information about movies, songs, or upcoming concerts using the omdb API, the Spotify API, and the BandsInTown API respectively.

## Formatting

Examples of how to format queries in the terminal

1. To query a movie
   * node liri **movie** "name-of-the-movie"
   * (ie. node liri movie the return of the king)
   ![Screenshot](movie.png)
   
2. To query a song
   * node liri **song** "name-of-the-song"
   * (ie. node liri song imagine)
   ![Screenshot](song.png)
   
3. To query a concert
   * node liri **concert** "name-of-the-band-you-want-to-pull-up-shows-for"
   * (ie. node liri concert rolling stones)
   ![Screenshot](concert.png)
   
4. To pull up a random query from the random.txt file
   * node liri **do-what-it-says**
   * (ie. node liri do-what-it-says)
      ![Screenshot](do-what-it-says.png)

## Preview

A video of the application running:

https://drive.google.com/file/d/1-pumgEo8c8g-cg27wegon40IhmpZiLRM/view

## Notes

This application requires node.js and a spotify API key to run. The spotify API key should be included in a .env file as shown below

  * SPOTIFY_ID=123456789123456789123456789

  * SPOTIFY_SECRET=123456789123456789123456789



