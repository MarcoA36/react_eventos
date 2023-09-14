
import { Box, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function IconRedes() {
    return (
        <>
            <Box 
            display="flex" 
            justifyContent="space-around"
            bgcolor="#151515"
            mt="20px"
            borderRadius="10px"
             >
                <IconButton >
                    <FacebookIcon sx={{fontSize:40, color:"#1877F2"}} />
                </IconButton>
                <IconButton>
                    <TwitterIcon sx={{fontSize:40, color:"#C13584"}} />
                </IconButton>
                <IconButton>
                    <InstagramIcon sx={{fontSize:40, color:"#1DA1F2"}} />
                </IconButton>
            </Box>
        </>
    )
}

export default IconRedes


