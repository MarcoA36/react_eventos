import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import RoomIcon from '@mui/icons-material/Room';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function CardEvento({ eventData }) {
    return (
      <>
        <Card>
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
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.location} />
              </ListItem>
  
              <ListItem sx={{ m: 0, p: 0 }}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.time} />
              </ListItem>
  
              <ListItem sx={{ m: 0, p: 0 }}>
                <ListItemIcon>
                  <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText primary={`Desde ${eventData.price}`} />
              </ListItem>
  
              <ListItem sx={{ m: 0, p: 0 }}>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.paymentMethods} />
              </ListItem>
            </List>
          </CardContent>
  
          <CardActions>
            <Button variant="contained" sx={{ width: "100%" }}>
              Comprar
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
  
  export default CardEvento;
  