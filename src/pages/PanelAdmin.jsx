import FormAgregarEvento from "../components/panelAdmin/FormAgregarEvento";
import PanelAdmin from "../components/panelAdmin/PanelAdmin";
import { Box, Container } from "@mui/material";
import CardsContainer from "../components/panelAdmin/CardsContainer";
import { Route, Routes } from "react-router-dom";

function PanelAdminPage() {

    return (
        <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Box
                sx={{
                    width: { xs: "0", md: "160px" },
                    transition: "width 0.3s",
                }}
            >

                <PanelAdmin />


            </Box>

            <Box sx={{ flex: 1, pt: "16px" }}>
                <Routes>
                    <Route exact path="/" element={<CardsContainer/>} />
                    <Route exact path="/agregarevento" element={<FormAgregarEvento />} />
                    <Route exact path="/vereventos" element={<CardsContainer />} />
                </Routes>
            </Box>
        </Container>
    );
}

export default PanelAdminPage;

