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

  const cardMediaStyle = {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 250,
  };

  const listItemStyle = {
    margin: 0,
    padding: 0
  };

  const buttonStyle = {
    width: "100%"
  }

  return (
    <Card sx={{borderRadius:2}}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <CardMedia
            component="img"
            image={eventData.image}
            alt={eventData.description}
            sx={ cardMediaStyle }
          />
        </Grid>

        <Grid item md={8} xs={12}>
          <CardContent>
            <Typography variant="h5">{eventData.title}</Typography>
            <List dense>
              <ListItem sx={listItemStyle}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.location} />
              </ListItem>

              <ListItem sx={listItemStyle}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.time} />
              </ListItem>

              <ListItem sx={listItemStyle}>
                <ListItemIcon>
                  <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText primary={`Desde ${eventData.price}`} />
              </ListItem>

              <ListItem sx={listItemStyle}>
                <ListItemIcon>
                  <PaymentIcon />
                </ListItemIcon>
                <ListItemText primary={eventData.paymentMethods} />
              </ListItem>
            </List>
          </CardContent>

          <CardActions>
            <Button variant="contained" sx={buttonStyle}>
              Editar
            </Button>
            <Button variant="contained" sx={buttonStyle}>
              Eliminar
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CardEvento;
