import { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Typography,
  IconButton,
  Hidden,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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

            <ListItemButton
              component={Link} 
              to="/vereventos" 
            >
              <ListItemText primary="Ver Eventos" />
            </ListItemButton>
            <ListItemButton
              component={Link} 
              to="/agregarevento" 
            >
              <ListItemText primary="Agregar evento" />
            </ListItemButton>
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
            <ListItemButton
              component={Link}
              to="/vereventos" 
            >
              <ListItemText primary="Ver Eventos" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/agregarevento"
            >
              <ListItemText primary="Agregar evento" />
            </ListItemButton>
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}

export default PanelAdmin;

