import { Box } from "@mui/material";
import Carrousel from "./Carrousel";

function Header() {


  return (
    <>
      <Box
        sx={{
          maxHeight: "52vh",
        }}
      >
        <Carrousel />
      </Box>
    </>
  );
}

export default Header;


