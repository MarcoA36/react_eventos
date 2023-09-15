import { Container, Grid, Typography, Box } from "@mui/material";
import FormContacto from "./FormContacto";

function Footer() {
    return (
        <Container sx={{ p: 4, mt: 3 }}>
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
                    <FormContacto />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
