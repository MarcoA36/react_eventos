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

function FormAgregarEvento() {
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

    const fetchLocaciones = async () => {
    try {
      const response = await fetch("http://localhost:3001/lugares");
      const data = await response.json();
      setLocaciones(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchLocaciones();
  }, []);

  const handlePaymentChange = (event) => {
    const value = event.target.value;
    if (selectedPayments.includes(value)) {
      setSelectedPayments(selectedPayments.filter((item) => item !== value));
    } else {
      setSelectedPayments([...selectedPayments, value]);
    }
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
      // Realiza la solicitud POST para agregar el nuevo evento
      const response = await fetch("http://localhost:3001/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoEvento),
      });

      if (response.ok) {
        console.log("Evento agregado exitosamente");
        setNuevoEvento({
          id: '',
          title: '',
          date: '',
          time: '',
          location: '',
          price: '',
          paymentMethods: [],
        });
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

  const textFieldStyle = {
    bgcolor: "white"
  }

  return (
    <Box
      sx={boxStyle}
    >
      <Typography variant="h4" textAlign="center">
        Agregar Evento
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
          {/* <Typography>Formas de pago</Typography> */}
          {paymentOptions.map((payment) => (
            <FormControlLabel
              key={payment}
              control={
                <Checkbox
                  checked={selectedPayments.includes(payment)}
                  onChange={handlePaymentChange}
                  value={payment}
                  name="paymentMethods"
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
          Agregar Evento
        </Button>
      </form>
    </Box>
  );
}

export default FormAgregarEvento;



