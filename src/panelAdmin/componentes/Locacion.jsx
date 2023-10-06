import { Box, Button, CardActions, Container, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Locacion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [locacion, setLocacion] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedLocacion, setEditedLocacion] = useState({});

  useEffect(() => {
    const fetchlocacion = async () => {
      try {
        const response = await fetch(`http://localhost:3001/lugares/${id}`);
        if (response.ok) {
          const data = await response.json();
          setLocacion(data);
          setEditedLocacion(data);
        } else {
          console.error("Error al obtener el locacion");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchlocacion();
  }, [id]);

  const listaItems = [
    {
      primary: "Ubicacion",
      secondary: editedLocacion?.ubicacion || "",
      icono: <RoomIcon />
    },
    {
      primary: "Capacidad",
      secondary: editedLocacion?.capacidad || "",
      icono: <AccessTimeIcon />
    },
  ];

  const boxStyle = {
    background: "#151515",
    padding: 4,
    borderRadius: 4
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  
  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/lugares/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedLocacion),
      });
  
      if (response.ok) {
        // Actualiza el estado local antes de que la respuesta sea exitosa
        setLocacion(editedLocacion);
  
        // La solicitud fue exitosa, puedes realizar acciones adicionales si es necesario
        setIsEditing(false);
      } else {
        console.error('Error al guardar los cambios');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedLocacion(locacion);
  };

  const handleInputChange = (field, value) => {
    setEditedLocacion((prevLocacion) => ({
      ...prevLocacion,
      [field]: value,
    }));
  };

  const handleDeleteClick = () => {
    const userConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este lugar?");
  
    if (userConfirmed) {
      // Si el usuario confirma, procede con la eliminación
      deleteLocacion();
    }
  };
  
  const deleteLocacion = async () => {
    try {
      const response = await fetch(`http://localhost:3001/lugares/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        navigate('/locaciones');
        console.log('Lugar eliminado correctamente');
      } else {
        console.error('Error al eliminar el lugar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <Container sx={{ mt: { xs: 4, md: 0 } }}>
        <Box sx={boxStyle}>
          <Typography variant="h3">{locacion ? locacion.lugar : "nombre del locacion"}</Typography>
          <List>
            {listaItems.map((item, index) => (
              <ListItem key={index} sx={{ bgcolor: "#90909044", mb: 2, borderRadius: 2 }}>
                <ListItemIcon sx={{color:"white"}} >{item.icono}</ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  secondary={
                    isEditing ? (
                      <TextField
                        value={editedLocacion[item.primary.toLowerCase()]}
                        onChange={(e) => handleInputChange(item.primary.toLowerCase(), e.target.value)}
                        sx={{bgcolor:"white", borderRadius:2}}
                      />
                    ) : (
                      item.secondary
                    )
                  }
                  primaryTypographyProps={{ color: "primary", fontWeight:"bold" }}
                  secondaryTypographyProps={{ color: "white" }}
                  sx={{ color: "white" }}
                />
              </ListItem>
            ))}
          </List>

          <CardActions>
            {isEditing ? (
              <>
                <Button variant="contained" onClick={handleSaveClick}>
                  Guardar
                </Button>
                <Button variant="contained" onClick={handleCancelClick}>
                  Cancelar
                </Button>
              </>
            ) : (
                <>
                <Button variant="contained" onClick={handleEditClick}>
                  Editar
                </Button>
                <Button variant="contained" onClick={handleDeleteClick}>
                  Eliminar
                </Button>
              </>
            )}
           
          </CardActions>
        </Box>
      </Container>
    </>
  );
}

export default Locacion;

