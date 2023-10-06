import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchEventoById, fetchLocaciones } from "../api/api";


function FormAgregarEvento() {
  const { id } = useParams();
  const [locaciones, setLocaciones] = useState([]);

  const [selectedPayments, setSelectedPayments] = useState([]);
  const paymentOptions = ["Tarjeta de crédito", "PayPal", "Efectivo", "Transferencia bancaria"];

  const [nuevoEvento, setNuevoEvento] = useState({
    id: '',
    title: '',
    date: '',
    time: '',
    location: '',
    price: '',
    paymentMethods: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locacionesData = await fetchLocaciones();
        setLocaciones(locacionesData);

        if (id) {
          const eventoData = await fetchEventoById(id);
          setNuevoEvento(eventoData);
          setSelectedPayments(eventoData.paymentMethods || []);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [id]);




  const handlePaymentChange = (event) => {
    const value = event.target.name;
    setSelectedPayments((prevPayments) => {
      const updatedPayments = new Set(prevPayments);

      if (updatedPayments.has(value)) {
        updatedPayments.delete(value);
      } else {
        updatedPayments.add(value);
      }

      return Array.from(updatedPayments);
    });
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoEvento((prevEvento) => ({
      ...prevEvento,
      [name]: value,
    }));
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const method = id ? 'PUT' : 'POST';
      const url = id ? `http://localhost:3001/eventos/${id}` : 'http://localhost:3001/eventos';

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...nuevoEvento,
          paymentMethods: selectedPayments,
        }),
      });

      if (response.ok) {
        console.log(id ? "Evento editado exitosamente" : "Evento agregado exitosamente");
        setNuevoEvento({
          id: '',
          title: '',
          date: '',
          time: '',
          location: '',
          price: '',
          paymentMethods: [],
        });
        setSelectedPayments([]);
      } else {
        console.error(id ? "Error al editar el evento" : "Error al agregar el evento");
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

  const textFieldStyle = {
    bgcolor: "white"
  }

  return (
    <Box
      sx={boxStyle}
    >
      <Typography variant="h4" textAlign="center">
        {id ? "Editar Evento" : "Agregar Evento"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del evento"
          variant="filled"
          fullWidth
          margin="dense"
          sx={{ bgcolor: "white" }}
          name="title"
          value={nuevoEvento.title}
          onChange={handleInputChange}
        />

        <TextField
          type="date"
          // variant="filled"
          fullWidth
          margin="dense"
          sx={textFieldStyle}
          name="date"
          value={nuevoEvento.date}
          onChange={handleInputChange}
        />

        <TextField
          type="time"
          fullWidth
          margin="dense"
          sx={textFieldStyle}
          name="time"
          value={nuevoEvento.time}
          onChange={handleInputChange}
        />
        <Select
          label="Lugar"
          fullWidth
          margin="dense"
          sx={{ bgcolor: "white" }}
          name="location"
          value={nuevoEvento.location}
          onChange={handleInputChange}
        >
          {locaciones.map((place) => (
            <MenuItem key={place.id} value={place.lugar}>
              {place.lugar}
            </MenuItem>
          ))}
        </Select>



        <TextField
          label="$ Precio"
          variant="filled"
          fullWidth
          margin="dense"
          name="price"
          value={nuevoEvento.price}
          onChange={handleInputChange}
          sx={textFieldStyle}
        />

        <Box>
          {paymentOptions.map((payment) => (
            <FormControlLabel
              key={payment}
              control={
                <Checkbox
                  checked={selectedPayments.includes(payment)}
                  onChange={handlePaymentChange}
                  value={payment}
                  name={payment}
                />
              }
              label={payment}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          {id ? "Guardar Cambios" : "Agregar Evento"}
        </Button>
      </form>
    </Box>
  );
}

export default FormAgregarEvento;



