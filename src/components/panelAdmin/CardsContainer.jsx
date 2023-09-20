import { Box } from "@mui/material";
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6,mt:4 }}>
            {eventData.map((event, index) => (
                <CardEvento key={index} eventData={event} />
            ))}
        </Box>
    );
}

export default CardsContainer;
