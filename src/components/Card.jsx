import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import RoomIcon from '@mui/icons-material/Room';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';

function CardEvento({ eventData }) {

  const iconStyle = {
    color:"black"
  }

  // const navigate = useNavigate();

  // const handleComprarClick = () => {
  //   const eventoId = eventData.id;
  //   navigate(`/comprarevento/${eventoId}`);
  // };
  return (
    <>
      <Card >
        <CardMedia
          component="img"
          image={eventData.image}
          height="200"
          alt={eventData.description}
        />

        <CardContent>
          <Typography variant="h5">{eventData.title}</Typography>
          <List dense>
            <ListItem sx={{ m: 0, p: 0 }}>
              <ListItemIcon>
                <RoomIcon  sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary={eventData.location} />
            </ListItem>

            <ListItem sx={{ m: 0, p: 0 }}>
              <ListItemIcon>
                <AccessTimeIcon sx={iconStyle} />
              </ListItemIcon>
              <ListItemText primary={eventData.time} />
            </ListItem>

            <ListItem sx={{ m: 0, p: 0 }}>
              <ListItemIcon>
                <LocalAtmIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary={`Desde ${eventData.price}`} />
            </ListItem>

            <ListItem sx={{ m: 0, p: 0 }}>
              <ListItemIcon>
                <PaymentIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary={eventData.paymentMethods} />
            </ListItem>
          </List>
        </CardContent>

        <CardActions>
          <Button
            sx={{
              width: "100%"
            }}
            variant="contained"
            component={Link} 
            to={`/comprarevento/${eventData.id}`}
          >
            Comprar
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardEvento;
