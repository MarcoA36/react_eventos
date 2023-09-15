import { TextField, Button } from "@mui/material";

function FormContacto() {
    return (
        <form>
            <TextField
                label="Nombre"
                variant="filled"
                fullWidth
                margin="dense"
                sx={{
                    bgcolor: "white",
                    borderRadius: 1
                }}
            />
            <TextField
                label="Correo Electrónico"
                variant="filled"
                fullWidth
                margin="dense"
                sx={{
                    bgcolor: "white",
                    borderRadius: 1
                }}
            />
            <TextField
                label="Mensaje"
                variant="filled"
                fullWidth
                multiline
                rows={5}
                margin="dense"
                sx={{
                    bgcolor: "white",
                    borderRadius: 1
                }}
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

    );
}

export default FormContacto;
