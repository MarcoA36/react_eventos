// api.js

const apiUrl = "http://localhost:3001";

export const fetchLocaciones = async () => {
  try {
    const response = await fetch(`${apiUrl}/lugares`);
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
  
};

export const fetchEventoById = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/eventos/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al obtener el evento");
      throw new Error("Error al obtener el evento");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};
