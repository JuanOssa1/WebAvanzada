import React from "react";
import { useState} from "react";
import {getFirestore,collection,getDocs, setDoc, doc,deleteDoc} from "firebase/firestore"
//import movies from "../data/movies.json";
import MovieForm from "../components/MovieForm";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MovieRow from "../components/MovieRow";
//import firebase from '../config/firebase'
import axios from '../config/axios'
import { useEffect } from "react";

function MovieList({ owner }) {

    const[movieList, setMovieList] = useState([])
    const[movieEdit, setMovieListEdit] = useState({id:"", title:"", descripcion:"", duracion:"", genero:""})

//    const firebaseDb = getFirestore(firebase)
    
    const getMovies = async() => {
  /*    
      const moviesCol = collection(firebaseDb, 'movies')
      const movieSnapshot = await getDocs(moviesCol) 
      const moviesFirebase = movieSnapshot.docs.map(doc => doc.data())
      */
     axios.get("movies").then((res)=>{
      setMovieList(res.data)
      if(res.data)
        setMovieList(res.data)
     })
      //return moviesFirebase
    }
    


    //.then(res=>setMovieList(res))
    useEffect(()=>{
      getMovies(),[]
    })

//getMovies()





    const handleDelete = (id) => {

      // deleteDoc(doc(firebaseDb, "movies",id+"")).then(()=>{
      //   getMovies().then(res=>setMovieList(res))

      // })
      let url = "movies/"+id
      axios.delete(url).then((res)=>{if(res.status===200) getMovies()})



      // setMovieList(movieList.filter((movie) => movie.id !== id))
      // console.log(id)
    }






  const renderMovies = () => {
    return movieList.map((movie) => (
      <MovieRow key={movie.id} row={movie} handleDelete={handleDelete} handleEdit={handleEdit}/>
    ));
  };
  const addMovie = (movie) => {
    var movies = [...movieList]
    console.log(movie)
    let id = Math.floor(Math.random()*10000000)
    if(movie.id===""){
      movie.id = id
      axios.post("movies", movie).then(
        (res)=>{
          if(res.status==201)
            getMovies()
        } 
      )
    } else {
      let url = "movies/"+movie.id
      axios.put(url, movie).then((res)=>{if(res.status===200) getMovies()})
    }

      // setDoc(doc(firebaseDb, "movies", movie.id+""), movie).then(()=>{
      //   getMovies().then(res=>setMovieList(res))

      // })
      //movies.push(movie);
    
    /* 
    else{
      const indice = movieList.findIndex((item)=>item.id===movie.id)
      movies[indice] =  movie

    }
    
    
    console.log(movies)
    */
    setMovieList(movies);
  }
  const handleEdit = (row) => {
    setMovieListEdit(row)
  }
  
  return (
    <div>
      <h1>Favoritos de {owner}</h1>
      <MovieForm addMovie={addMovie} movieEdit={movieEdit}/>
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
      
    </div>
  );
}

export default MovieList;
