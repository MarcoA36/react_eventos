
import { Container, Grid } from "@mui/material";
import CardEvento from "./Card";
import Search from "../components/Search"
import { useEffect, useState } from "react"


function CardsContainer() {

  const [search, setSearch] = useState("");
  const [eventData, setEventData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/eventos");
      const data = await response.json();
      setEventData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


    
    const filteredEvents = search
      ? eventData.filter((event) =>
          event.title.toLowerCase().includes(search.toLowerCase())
        )
      : eventData;

      const lastEvents = filteredEvents.slice(-12);
  
    return (
      <>
        <Container maxWidth="xl" sx={{ display:"flex",flexDirection:"column",gap:"10px",bgcolor: "#151515", padding: 1 }}>

        <Search handleSearch={setSearch} />

          <Grid container spacing={4}>
            {lastEvents.map((event, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
                <CardEvento eventData={event} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
  
  export default CardsContainer;
