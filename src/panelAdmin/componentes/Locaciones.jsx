// import { Container, List } from "@mui/material";
// // import CardEvento from "./CardEvento";
// import { useEffect, useState } from "react";
// import ListItemLocaciones from "./ListItemLocacion";

// function Locaciones() {
//     const [eventData, setEventData] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch("http://localhost:3001/lugares");
//             const data = await response.json();
//             setEventData(data);
//         } catch (error) {
//             console.error("Error al obtener los datos:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);
//     return (

//         <Container sx={{ mt: { xs: 4, md: 0 } }}>
//             <List>
//                 {eventData.map((event, index) => (
//                         // <CardEvento key={index} eventData={event} />
//                         <ListItemLocaciones key={index} eventData={event} />

//                 ))}
//             </List>
//         </Container>


//     );
// }

// export default Locaciones;



import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: "#151515",
        color: "white"
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CustomizedTables() {
    const [eventData, setEventData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/lugares");
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
        <Container sx={{ mt: { xs: 4, md: 0 } }}>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell>Lugar</StyledTableCell>
                            <StyledTableCell align="right">Ubicacion</StyledTableCell>
                            <StyledTableCell align="right">Capacidad</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eventData.map((event) => (
                            <StyledTableRow key={event.id}>
                                <StyledTableCell component="th" scope="row">
                                    {event.lugar}
                                </StyledTableCell>
                                <StyledTableCell align="right">{event.ubicacion}</StyledTableCell>
                                <StyledTableCell align="right">{event.capacidad}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        component={Link}
                                        to={`/locaciones/locacion/${event.id}`}
                                        color="primary"
                                    >
                                        Ver
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    );
}