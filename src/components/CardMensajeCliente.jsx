import { Card, CardContent, Typography } from "@mui/material"

function CardMensajeCliente() {
    return (
        <>
            <Card 
                sx={{
                    bgcolor:"inherit",
                    color:"white",
                    textAlign:"center"
                    }}>
                    <CardContent>
                        <Typography variant="h2">Atención al cliente</Typography>
                        <Typography variant="body2" sx={{
                            fontSize:18
                        }}>
                            Es probable que tus dudas se resuelvan consultando bien la información sobre el evento que hay en la web, bien en la sección de Preguntas Frecuentes que encontrarás en el menú superior/inferior.<br/><br/>

                        Si no encuentras tus entradas, revisa lo que hemos contado arriba acerca de la recuperación de las mismas.<br/><br/>
                        
                        Si aun así, necesitas consultarnos cualquier otra cosa, rellena el formulario o escríbenos directamente a compras@cdmticket.ar<br/><br/>
                        
                        ¡Te responderemos enseguida!
                        
                        Muchas gracias.</Typography>
                    </CardContent>
                </Card>
        </>
    )
}

export default CardMensajeCliente