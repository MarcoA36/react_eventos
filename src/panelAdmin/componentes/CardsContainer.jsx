import { Box, Container, Grid } from "@mui/material";
import CardEvento from "./CardEvento";
import { useEffect, useState } from "react";

function CardsContainer() {
    const [eventData, setEventData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("api/eventos.json");
            const data = await response.json();
            setEventData(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        // <Box sx={{ display: "flex", flexWrap:"wrap", gap:4, width:"100%", justifyContent:"center" }}>
        //     {eventData.map((event, index) => (
        //         <CardEvento key={index} eventData={event} />
        //     ))}
        // </Box>

        <Container sx={{mt: { xs: 4, md:0 }}}>
            <Grid container spacing={4}>
                {eventData.map((event, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CardEvento eventData={event} />
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
}

export default CardsContainer;
