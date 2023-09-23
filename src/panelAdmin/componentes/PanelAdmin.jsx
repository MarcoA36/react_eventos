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

  const adminLinks = [
    {
      title: "Ver Evetos",
      path: "/vereventos",
    },
    {
      title: "Agregar Evento",
      path: "/agregarevento",
    },
    {
      title: "Informes",
      path: "/informes",
    },
    {
      title: "Promociones",
      path: "/promociones",
    },
    {
      title: "Soporte y ayuda",
      path: "/soporte",
    },
    {
      title: "Registro de actividad",
      path: "/actividad",
    },
    {
      title: "Cerrar sesión",
      path: "/cerrar-sesion",
    },
  ];

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
        <Drawer anchor="left" open={open} onClose={toggleDrawer} variant="temporary">
          <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center", p: 2 }}>
            CDM
          </Typography>
          <List>
            {adminLinks.map((link) => (
              <ListItemButton
                key={link.title}
                component={Link}
                to={link.path}
                className={link.class ? link.class : "link"}
              >
                <ListItemText primary={link.title} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" variant="permanent">
          <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center", p: 2 }}>
            CDM
          </Typography>
          <List>
            {adminLinks.map((link) => (
              <ListItemButton 
              key={link.title} 
              component={Link} 
              to={link.path} 
              >
                <ListItemText primary={link.title} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
}

export default PanelAdmin;
