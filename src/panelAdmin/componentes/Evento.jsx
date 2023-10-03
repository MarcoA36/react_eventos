import { Box, Button, CardActions, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomIcon from '@mui/icons-material/Room';
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Evento() {
    const { id } = useParams();
    const [evento, setEvento] = useState(null);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await fetch(`http://localhost:3001/eventos/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setEvento(data);
                } else {
                    console.error("Error al obtener el evento");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        fetchEvento();
    }, [id]);

    const listaItems = [
        {
            primary: "Ubicación",
            secondary: evento?.location || "",
            icono: <RoomIcon />
        },
        {
            primary: "Apertura de puertas",
            secondary: evento?.time || "",
            icono: <AccessTimeIcon />
        },
        {
            primary: "Entradas online desde",
            secondary: evento?.price || "",
            icono: <LocalAtmIcon />
        },
        {
            primary: "Formas de Pago",
            secondary: evento?.paymentMethods?.join(", ") || "",
            icono: <PaymentIcon />
        },
        {
            primary: "Fecha del Evento",
            secondary: evento?.date || "",
            icono: <DateRangeIcon />
        },
    ];

    const boxStyle = {
        background: "#151515",
        padding: 4,
        borderRadius:4
    }


    return (
        <>
            <Container sx={{ mt: { xs: 4, md: 0 } }}>
                <Box sx={boxStyle}>
                <Typography variant="h3">{evento ? evento.title : "nombre del evento"}</Typography>
                 
                        <List>
                            {listaItems.map((item, index) => (
                                <ListItem key={index} sx={{bgcolor:"#91929333", mb:2, borderRadius:2}}>
                                    <ListItemIcon sx={{color:"white"}}>
                                        {item.icono}
                                    </ListItemIcon>
                                    <ListItemText 
                                    primary={item.primary} 
                                    secondary={item.secondary} 
                                    primaryTypographyProps={{ color: "primary", fontWeight:"bold" }}
                                    secondaryTypographyProps={{ color: "white" }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    <CardActions>
                        <Button variant="contained">
                            Editar
                        </Button>
                        <Button variant="contained">
                            Eliminar
                        </Button>
                    </CardActions>
                </Box>
        
                 


            </Container>
        </>
    );
}

export default Evento;