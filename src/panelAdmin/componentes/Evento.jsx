import { Button, Card, CardActions, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomIcon from '@mui/icons-material/Room';
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Evento() {
    const { id } = useParams();
    // const [eventData, setEventData] = useState([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("api/eventoSeleccionado.json");
    //         const data = await response.json();
    //         setEventData(data);
    //     } catch (error) {
    //         console.error("Error al obtener los datos:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    // console.log(eventData.title)

    const listaItems = [
        {
            primary: "Ubicación",
            secondary: "Teatro Flores",
            icono: <RoomIcon />
        },
        {
            primary: "Apertura de puertas",
            secondary: "21hs",
            icono: <AccessTimeIcon />
        },
        {
            primary: "Entradas online desde",
            secondary: "4000",
            icono: <LocalAtmIcon />
        },
        {
            primary: "Formas de Pago",
            secondary: "Todas las tarjetas",
            icono: <PaymentIcon />
        },
        {
            primary: "Fecha del Evento",
            secondary: "15/10/2023",
            icono: <DateRangeIcon />
        },
    ];

    return (
        <>
            <Container sx={{ mt: { xs: 4, md: 0 } }}>
                <Card>
                    <Typography variant="h1">Evento {id}</Typography>
                    <CardContent>
                        <List>
                            {listaItems.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        {item.icono}
                                    </ListItemIcon>
                                    <ListItemText primary={item.primary} secondary={item.secondary} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">
                            Editar
                        </Button>
                        <Button variant="contained">
                            Eliminar
                        </Button>
                    </CardActions>

                </Card>

            </Container>
        </>
    );
}

export default Evento;