import { Container } from "@mui/material"
import CardRecuperarEntrada from "../components/CardRecuperarEntrada"
import CardMensajeCliente from "../components/CardMensajeCliente"

CardMensajeCliente
function AtencionClientePage() {
    return (
        <>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
            }}>
                <CardRecuperarEntrada />
                <CardMensajeCliente />

            </Container>
        </>
    )
}

export default AtencionClientePage