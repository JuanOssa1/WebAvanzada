import React from "react";
import { useState } from "react";
import movies from "../data/movies.json";
import MovieForm from "../components/MovieForm";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MovieRow from "../components/MovieRow";

function MovieList({ owner }) {

    const[movieList, setMovieList] = useState(movies)
    const handleDelete = (id) => {
      // const indice = movieList.findIndex((movie)=>movie._id===id)
      // const lista = [...movieList]
      // lista.slice(indice,1)
      // setMovieList

      setMovieList(movieList.filter((movie) => movie._id !== id))
      console.log(id)
    }
  const renderMovies = () => {
    return movieList.map((movie) => (
      <MovieRow key={movie._id} row={movie} handleDelete={handleDelete}/>
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
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Genero</TableCell>
            <TableCell>Descripcion</TableCell>
            <TableCell>Duracion</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {renderMovies()}
        </TableBody>
        </Table>
        </TableContainer>
      <MovieForm addMovie={addMovie} />
    </div>
  );
}

export default MovieList;
