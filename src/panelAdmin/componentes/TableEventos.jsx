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
import Loader from './Loader';

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


export default function TableEventos() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/eventos");
            const data = await response.json();
            setEventData(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <Container sx={{ mt: { xs: 4, md: 0 } }}>
            {loading ? (
                <Loader />
            ) : (
                <TableContainer component={Paper}>
                    <Table aria-label="customized table" >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Evento</StyledTableCell>
                                <StyledTableCell align="center">Fecha</StyledTableCell>
                                <StyledTableCell align="center">Hora</StyledTableCell>
                                <StyledTableCell align="center">Lugar</StyledTableCell>
                                <StyledTableCell align="center">Entradas</StyledTableCell>
                                <StyledTableCell align="center">Disponibles</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {eventData.map((event) => (
                                <StyledTableRow key={event.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {event.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{event.date}</StyledTableCell>
                                    <StyledTableCell align="center">{event.time}</StyledTableCell>
                                    <StyledTableCell align="center">{event.location}</StyledTableCell>
                                    <StyledTableCell align="center">800</StyledTableCell>
                                    <StyledTableCell align="center">54</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <Button
                                            component={Link}
                                            to={`/vereventos/evento/${event.id}`}
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
            )}
        </Container>

    );
}

