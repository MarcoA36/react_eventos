import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

function CardRecuperarEntrada() {
    return (
        <>
            <Card
                sx={{
                    bgcolor: "inherit",
                    color: "white",
                    textAlign: "center"
                }}>
                <CardContent>
                    <Typography variant="h2">Recuperación de entradas</Typography>
                    <Typography variant="body2" sx={{
                        fontSize: 18
                    }}>Las entradas adquiridas en CDMTICKET están a tu disposición en el Área Privada de la web, a la que puedes acceder con el correo de compra y la clave que has configurado; si nunca lo has hecho, es el número del Documento de Identificación (DNI, NIF, pasaporte, etc.) que indicaste al realizar la compra. Puedes también recuperarlas aquí mismo haciendo clic en el siguiente botón</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{
                        m: "auto",
                        px: 2,
                        py: 1,
                        fontSize: 16
                    }}>RECUPERAR ENTRADA/TICKET</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardRecuperarEntrada