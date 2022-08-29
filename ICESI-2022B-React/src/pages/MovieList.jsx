import React from "react";
import { useState } from "react";
import movies from "../data/movies.json";
import MovieForm from "../components/MovieForm";

function MovieList({ owner }) {

    const[movieList, setMovieList] = useState(movies)
  const renderMovies = () => {
    return movieList.map((movie) => (
      <li key={movie._id}>
        {movie.title} -- {movie.descripcion.substring(0, 50)}
      </li>
    ));
  };
  const addMovie = (movie) => {
    var movies = [...movieList]
    movies.push(movie);
    console.log(movies)
    setMovieList(movies);
  }
  return (
    <div>
      <h1>Favoritos de {owner}</h1>
      <MovieForm addMovie={addMovie} />
      <ul>{renderMovies()}</ul>
    </div>
  );
}

export default MovieList;
