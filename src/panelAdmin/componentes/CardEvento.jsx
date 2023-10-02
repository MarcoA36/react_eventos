import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEvento({ eventData }) {

  const cardMediaStyle = {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 250,
  };


  const buttonStyle = {
    width: "100%"
  }

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image={eventData.image}
        alt={eventData.description}
        sx={cardMediaStyle}
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5">{eventData.title}</Typography>
        <Typography variant="h6">{eventData.date}</Typography>
        <Typography variant="h6">{eventData.time}</Typography>

      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          sx={buttonStyle}
          component={Link}
          to={`evento/${eventData.id}`}
        >
          Ver
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardEvento;
