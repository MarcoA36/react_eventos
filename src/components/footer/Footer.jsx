import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";

function Footer() {
    return (
        <Container sx={{p:4, mt:3}}>
            <Grid container spacing={4}>

                <Grid item xs={12} md={6}
                    sx={{ height: "auto", display: "flex", alignItems: "center" }}
                >
                    <Box>
                        <Typography>
                            Mitre 1525, Comodoro Rivadavia, Chubut
                        </Typography>
                        <Typography>
                            (123) 456-7890
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <form>
                        <TextField
                            label="Nombre"
                            variant="filled"
                            fullWidth
                            margin="dense"
                            sx={{bgcolor:"white"}}
                        />
                        <TextField
                            label="Correo Electrónico"
                            variant="filled"
                            fullWidth
                            margin="dense"
                            sx={{bgcolor:"white"}}
                        />
                        <TextField
                            label="Mensaje"
                            variant="filled"
                            fullWidth
                            multiline
                            rows={5}
                            margin="dense"
                            sx={{bgcolor:"white"}}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Enviar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
