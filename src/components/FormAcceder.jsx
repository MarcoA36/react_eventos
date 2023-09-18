import { Box, Button, TextField, Typography } from "@mui/material"

function FormAcceder() {
    return (
        <>
           <Box sx={{
                    m:"auto",
                    mt:10,
                    px:10,
                    py:5,
                    bgcolor:"#353535",
                    borderRadius:2
                }}>
                <Typography variant="h4" gutterBottom>
                    INICIO DE SESIÓN
                </Typography>
                <Typography >
                    Utiliza la dirección de email que indicaste durante la compra o tu usuario y tu contraseña para acceder al Área Privada de la web; si es la primera vez que lo haces, la contraseña es el número del Documento de Identificación (NIF, pasaporte, etc.) que usaste. Luego podrás cambiarla.
                </Typography>
                <form>
                    <TextField
                        label="Correo Electrónico"
                        variant="filled"
                        fullWidth
                        margin="dense"
                        sx={{bgcolor:"white"}}
                    />
                    <TextField
                        label="Contraseña"
                        variant="filled"
                        fullWidth
                        margin="dense"
                        type="password"
                        sx={{bgcolor:"white"}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Acceder
                    </Button>
                </form>
                </Box>
        </>
    )
}

export default FormAcceder



