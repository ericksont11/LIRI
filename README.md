# LIRI


## Description

An application run in the terminal that takes user inputs to return information about movies, songs, or upcoming concerts using the omdb API, the Spotify API, and the BandsInTown API respectively.

## Formatting

Examples of how to format queries in the terminal

1. To query a movie
   * node liri **movie** "name-of-the-movie"
   * (ie. node liri movie the departed)
   ![Screenshot](assets/images/movie.png)
   * If no movie name is included it will pull up information for the movie Mr.Nobody
   
2. To query a song
   * node liri **spotify** "name-of-the-song"
   * (ie. node liri spotify hello)
   ![Screenshot](assets/images/song.png)
   * If no song name is included it will pull up information for the song 'The Sign' by Ace of Base
   
   
3. To query concerts
   * node liri **concert** "name-of-the-band-you-want-to-pull-up-shows-for"
   * (ie. node liri concert rolling stones)
   ![Screenshot](assets/images/concert.png)
   * If no name is included it will pull the next tour date for The Who
   
4. To pull up a random query from the random.txt file
   * node liri **do-what-it-says**
   * (ie. node liri do-what-it-says)
      ![Screenshot](assets/images/do-what-it-says.png)

## Preview

A video of the application running:

https://drive.google.com/file/d/1-pumgEo8c8g-cg27wegon40IhmpZiLRM/view

## Notes

This application requires node.js and a spotify API key to run. The spotify API key should be included in a .env file as shown below

  * SPOTIFY_ID=0123456789012345678901234567890

  * SPOTIFY_SECRET=0123456789012345678901234567890



