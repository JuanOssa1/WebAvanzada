import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {TextField, Box, Button} from '@mui/material';

function MovieRow({row, handleDelete, handleEdit}) {

    const handleClickDelete= () =>{
        handleDelete(row.id)
    }
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell>{row.titulo}</TableCell>
      <TableCell align="right">{row.duracion}</TableCell>
      <TableCell>{row.genero}</TableCell>
      <TableCell>{row.descripcion.substring(0,50)}</TableCell>
      <TableCell>
      <Button  sx={{mr:2}} onClick={()=>{handleEdit(row)}} variant="contained" color="primary">Editar</Button>
      <Button onClick={handleClickDelete} variant="contained" color="error">Eliminar</Button>
      </TableCell>
    </TableRow>
  );
}

export default MovieRow;
