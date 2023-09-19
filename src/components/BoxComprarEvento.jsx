import { Box, Grid  } from "@mui/material"

import CardImageEvento from "./CardImageEvento";
import IconRedes from "./IconRedes";
import CardInfoEvento from "./CardInfoEvento";

function BoxComprarEvento({eventData}) {
    return (
        <>
            <Box>

                <Grid container spacing={4}>

                    <Grid item
                        xs={12}
                        md={4}
                    >
                        <CardImageEvento eventData={eventData.image}/>
                        <IconRedes />
                    </Grid>

                    <Grid item
                        xs={12}
                        md={8}
                    >

                        <CardInfoEvento eventData={eventData} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default BoxComprarEvento;