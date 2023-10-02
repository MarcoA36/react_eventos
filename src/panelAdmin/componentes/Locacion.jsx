import { Box, Button, Card, CardActions, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomIcon from '@mui/icons-material/Room';
import DateRangeIcon from "@mui/icons-material/DateRange";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Locacion() {
    const { id } = useParams();
    const [locacion, setLocacion] = useState(null);

    useEffect(() => {
        const fetchlocacion = async () => {
            try {
                const response = await fetch(`http://localhost:3001/lugares/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setLocacion(data);
                } else {
                    console.error("Error al obtener el locacion");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };

        fetchlocacion();
    }, [id]);

    const listaItems = [
        {
            primary: "Ubicación",
            secondary: locacion?.ubicacion || "",
            icono: <RoomIcon />
        },
        {
            primary: "Capacidad",
            secondary: locacion?.capacidad || "",
            icono: <AccessTimeIcon />
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
                    <Typography variant="h3">{locacion ? locacion.lugar : "nombre del locacion"}</Typography>
                        <List>
                            {listaItems.map((item, index) => (
                                <ListItem key={index} sx={{bgcolor:"#90909044", mb:2, borderRadius:2}}>
                                    <ListItemIcon>
                                        {item.icono}
                                    </ListItemIcon>
                                    <ListItemText primary={item.primary} secondary={item.secondary} />
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

export default Locacion;