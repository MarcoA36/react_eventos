import { useEffect, useState } from "react";
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
// import styled from "styled-components";

function FormAgregarEvento() {
  const [locaciones, setLocaciones] = useState([]);
  const [locacionSeleccionada, setLocacionSeleccionada] = useState("Lugar del evento");

  const [selectedPayments, setSelectedPayments] = useState([]);
  const paymentOptions = ["Tarjeta de crédito", "PayPal", "Efectivo", "Transferencia bancaria"];

  const handlePaymentChange = (event) => {
    const value = event.target.value;
    if (selectedPayments.includes(value)) {
      setSelectedPayments(selectedPayments.filter((item) => item !== value));
    } else {
      setSelectedPayments([...selectedPayments, value]);
    }
  };

  const fetchLocaciones = async () => {
    try {
      const response = await fetch("api/lugares.json");
      const data = await response.json();
      setLocaciones(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchLocaciones();
  }, []);

//   const FormStyled = styled.form `
//       border: 3px solid red;
// `;

const boxStyle = {
  width: { xs: "90%", md: "70%", lg: "50%" },
  m: "auto",
  bgcolor: "#151515",
  p: 2,
  my: 4,
  borderRadius: 3
}

const textFieldStyle = {
  bgcolor: "white"
}


  return (
    <>
      <Box sx={ boxStyle } >
        <Typography variant="h4" textAlign="center">
          Agregar Evento
        </Typography>
        <form>
          <TextField
            label="Nombre del evento"
            variant="filled"
            fullWidth
            margin="dense"
            sx={ textFieldStyle }
          />

          <TextField
            type="date"
            // variant="filled"
            fullWidth
            margin="dense"
            sx={ textFieldStyle }
          />

          <TextField
            type="time"
            fullWidth
            margin="dense"
            sx={ textFieldStyle }
          />
          <Select
            label="Lugar"
            fullWidth
            margin="dense"
            sx={{ bgcolor: "white" }}
            value={locacionSeleccionada}
            onChange={(e) => setLocacionSeleccionada(e.target.value)}
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
            sx={ textFieldStyle }
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
    </>
  );
}

export default FormAgregarEvento;


