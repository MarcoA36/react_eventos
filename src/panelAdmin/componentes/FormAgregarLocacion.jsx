 import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

function FormAgregarLocacion() {
  const [nuevaLocacion, setNuevaLocacion] = useState({
    id:'',
    lugar: '',
    ubicacion: '',
    capacidad: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaLocacion((prevEvento) => ({
      ...prevEvento,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/lugares", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaLocacion),
      });

      if (response.ok) {
        console.log("locacion agregada exitosamente");
      } else {
        console.error("Error al agregar el evento");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };


  const boxStyle = {
    width: { xs: "90%", md: "70%", lg: "50%" },
    m: "auto",
    bgcolor: "#151515",
    p: 4,
    my: 4,
    borderRadius: 3
  }


  return (
    <Box
      sx={boxStyle}
    >
      <Typography variant="h4" textAlign="center">
        Agregar Locacion
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Locacion"
          variant="filled"
          fullWidth
          margin="dense"
          sx={{ bgcolor: "white" }}
          name="lugar"
          value={nuevaLocacion.lugar}
          onChange={handleInputChange}
        />
        <TextField
          label="Ubicación"
          variant="filled"
          fullWidth
          margin="dense"
          sx={{ bgcolor: "white" }}
          name="ubicacion"
          value={nuevaLocacion.ubicacion}
          onChange={handleInputChange}
        />
         <TextField
          label="Capacidad"
          variant="filled"
          fullWidth
          margin="dense"
          sx={{ bgcolor: "white" }}
          name="capacidad"
          value={nuevaLocacion.capacidad}
          onChange={handleInputChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Agregar Locacion
        </Button>
      </form>
    </Box>
  );
}

export default FormAgregarLocacion;