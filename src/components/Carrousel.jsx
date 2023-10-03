import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";


function Carrousel() {
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


  const imgStyle = {
    width: "100%", 
    height: "100%",
     maxHeight: "52vh", 
     borderRadius:1
  }
    return (
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
              sx={imgStyle}
            />
          ))}
        </Carousel> 
    );
}

export default Carrousel;