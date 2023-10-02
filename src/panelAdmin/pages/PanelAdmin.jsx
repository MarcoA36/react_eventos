import FormAgregarEvento from "../componentes/FormAgregarEvento";
import PanelAdmin from "../componentes/PanelAdmin";
import { Box, Container } from "@mui/material";
import CardsContainer from "../componentes/CardsContainer";
import { Route, Routes } from "react-router-dom";
import Evento from "../componentes/Evento";
import Locaciones from "../componentes/Locaciones";
import FormAgregarLocacion from "../componentes/FormAgregarLocacion";
import Locacion from "../componentes/Locacion";

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
                    <Route exact path="/" element={<CardsContainer/>} />
                    <Route exact path="/agregarevento" element={<FormAgregarEvento />} />
                    <Route exact path="/vereventos" element={<CardsContainer />} />
                    <Route exact path="/vereventos/evento/:id" element={<Evento/>} />
                    <Route exact path="/locaciones" element={<Locaciones/>} />
                    <Route exact path="/locaciones/locacion/:id" element={<Locacion/>} />
                    <Route exact path="/agregarlocacion" element={<FormAgregarLocacion/>} />
                </Routes>
            </Box>
        </Container>
    );
}

export default PanelAdminPage;

