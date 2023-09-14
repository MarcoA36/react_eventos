import { Box, Button, TextField } from "@mui/material"

const Search = ({handleSearch}) => {
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#353535",
                    height: "80px",
                    display: "flex",
                    gap: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TextField
                    sx={{
                        width: {lg:"50%", xs:"80%"},
                        bgcolor: "white",
                        borderRadius:"5px"
                    }}
                    onChange={(event)=>handleSearch(event.target.value)}
                />
                <Button variant="contained">Buscar</Button>
            </Box>
        </>
    )
}

export default Search