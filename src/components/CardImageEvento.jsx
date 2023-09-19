import { Card, CardMedia} from "@mui/material"


function CardImageEvento({eventData}) {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    image={eventData}
                    alt="descripcion"
                />
            </Card>
        </>
    )
}

export default CardImageEvento


