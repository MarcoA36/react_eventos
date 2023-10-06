import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import PanelAdmin from "../componentes/PanelAdmin";

import TableEventos from "../componentes/TableEventos";
import Evento from "../componentes/Evento";
import FormAgregarEvento from "../componentes/FormAgregarEvento";
import TableLocaciones from "../componentes/TableLocaciones";
import Locacion from "../componentes/Locacion";
import FormAgregarLocacion from "../componentes/FormAgregarLocacion";

function PanelAdminPage() {

    return (
        <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Box
                sx={{
                    width: { xs: "0", md: "160px" },
                    transition: "width 0.5s",
                }}
            >
                <PanelAdmin />
            </Box>

            <Box sx={{ flex: 1, pt: "16px" }}>
                <Routes>
                    <Route exact path="/" element={<TableEventos />} />
                    <Route exact path="/agregarevento" element={<FormAgregarEvento />} />
                    <Route exact path="/vereventos" element={<TableEventos />} />
                    <Route exact path="/vereventos/evento/:id" element={<Evento />} />
                    <Route exact path="/editarevento/:id" element={<FormAgregarEvento />} />
                    <Route exact path="/locaciones" element={<TableLocaciones />} />
                    <Route exact path="/locaciones/locacion/:id" element={<Locacion />} />
                    <Route exact path="/agregarlocacion" element={<FormAgregarLocacion />} />
                    <Route exact path="/editarlocacion/:id" component={<FormAgregarLocacion />} />
                </Routes>
            </Box>
        </Container>
    );
}

export default PanelAdminPage;

