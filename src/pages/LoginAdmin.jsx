import { Box, Button, Container, TextField, Typography } from "@mui/material"

function LoginAdminPage() {
    return (
        <>
            <Container maxWidth="xs" sx={{ textAlign: "center", mt: "10vh", bgcolor:"#151515" }} >
                <Box sx={{px:{md:4}, py:4}}>
                    <Typography variant="h3">
                        CDM
                    </Typography>
                    <form>
                        <TextField
                            label="Correo Electrónico"
                            variant="filled"
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label="Contraseña"
                            variant="filled"
                            fullWidth
                            margin="dense"
                            type="password"
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

            </Container>
        </>
    )
}

export default LoginAdminPage