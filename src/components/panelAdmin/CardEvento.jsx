import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PaymentIcon from "@mui/icons-material/Payment";

function CardEvento({ eventData }) {
  return (
    <Card sx={{borderRadius:2}}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <CardMedia
            component="img"
            image={eventData.image}
            alt={eventData.description}
            sx={{ maxWidth: '100%', height: 'auto', maxHeight: 250 }}
          />
        </Grid>

        <Grid item md={8} xs={12}>
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
              Editar
            </Button>
            <Button variant="contained" sx={{ width: "100%" }}>
              Eliminar
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardEvento;
