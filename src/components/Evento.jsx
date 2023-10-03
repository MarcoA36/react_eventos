import { Box, Grid  } from "@mui/material"

import CardImageEvento from "./CardImageEvento";
import IconRedes from "./IconRedes";
import CardInfoEvento from "./CardInfoEvento";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Evento() {

    const { id } = useParams();
    const [eventData, setEventData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/eventos/${id}`);
            const data = await response.json();
            setEventData(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);
    return (
        <>
            <Box>

                <Grid container spacing={4}>

                    <Grid item
                        xs={12}
                        md={4}
                    >
                        <CardImageEvento eventData={eventData.image}/>
                        <IconRedes />
                    </Grid>

                    <Grid item
                        xs={12}
                        md={8}
                    >

                        <CardInfoEvento eventData={eventData} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Evento;