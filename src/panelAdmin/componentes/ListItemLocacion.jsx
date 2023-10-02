import { ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ListItemLocaciones({ eventData }) {
  
  const listItemStyle = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center", 
    mb:3,
    p: 2,
    background: "#151515"
  };


  const textStyle = {
    color: "white"
  };

  return (
    <ListItem disablePadding sx={listItemStyle} component={Link} to={`locacion/${eventData.id}`}>
      <ListItemText
        primary={
          <>
            <Typography variant="h5" sx={textStyle}>{eventData.lugar}</Typography>
            <Typography variant="p" sx={textStyle}>{eventData.ubicacion}</Typography>
          </>
        }
      />
      <ListItemText
        primary={
            <Typography variant="p" sx={textStyle}>Capacidad para {eventData.capacidad} personas</Typography>
        }
      />

<ListItemText
        primary={
            <Typography variant="p" sx={textStyle}>Butacas sin numerar</Typography>
        }
      />
    </ListItem>
  );
}

export default ListItemLocaciones;