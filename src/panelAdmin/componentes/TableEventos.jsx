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
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Evento</StyledTableCell>
                                <StyledTableCell align="right">Lugar</StyledTableCell>
                                <StyledTableCell align="right">Fecha</StyledTableCell>
                                <StyledTableCell align="right">Hora</StyledTableCell>
                                <StyledTableCell align="right">Entradas</StyledTableCell>
                                <StyledTableCell align="right">Disponibles</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {eventData.map((event) => (
                                <StyledTableRow key={event.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {event.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{event.location}</StyledTableCell>
                                    <StyledTableCell align="right">{event.date}</StyledTableCell>
                                    <StyledTableCell align="right">{event.time}</StyledTableCell>
                                    <StyledTableCell align="right">800</StyledTableCell>
                                    <StyledTableCell align="right">54</StyledTableCell>
                                    <StyledTableCell align="right">
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

