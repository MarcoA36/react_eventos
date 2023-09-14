import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import HomePage from "./pages/Home"
// import AtencionClientePage from "./pages/AtencionCliente"
// import AccederPage from "./pages/Acceder"
// import EventoPage from "./pages/Evento"
// import { useEffect, useState } from "react"
// import LoginAdminPage from "./pages/LoginAdmin"
// import { Container } from "@mui/material"
// import PanelAdminPage from "./pages/PanelAdmin"


function App() {


  return (
    <>
      {/* <LoginAdminPage /> */}
      {/* <PanelAdminPage /> */}

      <Navbar />
      <HomePage/>
      {/* <EventoPage /> */}
      {/* <AtencionClientePage />
      <AccederPage /> */}
      <Footer />
    </>
  )
}

export default App
