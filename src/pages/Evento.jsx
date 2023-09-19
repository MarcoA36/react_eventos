import { Container } from "@mui/material"
import BoxComprarEvento from "../components/BoxComprarEvento"
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

function EventoPage() {

    const [eventData, setEventData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("api/eventoSeleccionado.json");
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
        <>
            <Container
                maxWidth="xl"
            >
                <BoxComprarEvento eventData={eventData} />
            </Container>
        </>
    )
}

export default EventoPage