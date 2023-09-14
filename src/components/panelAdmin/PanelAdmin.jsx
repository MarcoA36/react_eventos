import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function PanelAdmin() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="Abrir panel"
          onClick={toggleDrawer}
          edge="start"
        >
          <MenuIcon sx={{ fontSize: "38px" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          variant="temporary"
        >
          <Typography
            sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center", p: 2 }}
          >
            CDM
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Ver Eventos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Agregar Evento" />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" variant="permanent">
          <Typography
            sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center", p: 2 }}
          >
            CDM
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Ver Eventos" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Agregar Evento" />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}

export default PanelAdmin;

