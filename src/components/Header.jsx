import { Box, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Header() {
  const [imageHeader, setImageHeader] = useState([]);

  const fetchImagePortada = async () => {
    try {
      const response = await fetch("http://localhost:3001/imgHeader");
      const data = await response.json();
      setImageHeader(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchImagePortada();
  }, []);


  const lastThreeImages = imageHeader.slice(-3);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#252525",
          maxHeight: "52vh",
        }}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={8000}
        >
          {lastThreeImages.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              src={image.image}
              alt={`Imagen ${index + 1}`}
              sx={{ width: "100%", height: "100%", maxHeight: "52vh" }}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Header;


