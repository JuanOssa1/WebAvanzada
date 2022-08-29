import { useState } from "react";
import React from "react";
import {TextField, Box, Button} from '@mui/material';


function MovieForm({addMovie}) {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [duracion, setDuracion] = useState("");
  const [genero, setGenero] = useState("");
  
  const handleClick = () => {
    let _id = Math.random()*10000000
    let movie = {_id, title, descripcion, duracion, genero}
    setTitle("")
    setDescripcion("")
    setDuracion("")
    setGenero("")
    addMovie(movie)
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-basic"
          label="Titulo"
          variant="standard"
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
        ></TextField>
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Descipcion"
          multiline
          variant="standard"
          onChange={(e)=> setDescripcion(e.target.value)}
          value={descripcion}
        ></TextField>
      </div>
      <div>
      <TextField
        id="standard-basic"
        label="Duracion"
        type="number"
        variant="standard"
        onChange={(e)=> setDuracion(e.target.value)}
        value={duracion}
      ></TextField>
      </div>
      <div>
      <TextField
        id="standard-basic"
        label="Genero"
        variant="standard"
        onChange={(e)=> setGenero(e.target.value)}
        value={genero}
      ></TextField>
      </div>
      <Button onClick={handleClick}>Guardar pelicula</Button>

      
      
    </Box>
  );
}

export default MovieForm;
