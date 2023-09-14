import { Card, CardMedia} from "@mui/material"


function CardImageEvento() {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    image="src/img/eventos/donosvaldo.jpeg"
                    alt="descripcion"
                />
            </Card>
        </>
    )
}

export default CardImageEvento


