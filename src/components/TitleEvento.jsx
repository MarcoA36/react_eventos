import { Typography} from "@mui/material"

function TitleEvento({eventData}) {
    return (
        <>
           <Typography variant="h4" sx={{p:1}}>{eventData}</Typography>
        </>
    )
}

export default TitleEvento