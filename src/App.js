import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import HomePage from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import AtencionClientePage from "./pages/AtencionCliente"
import AccederPage from "./pages/Acceder"
import EventoPage from "./pages/Evento"
// import LoginAdminPage from "./pages/LoginAdmin"
import PanelAdminPage from "./panelAdmin/pages/PanelAdmin"

function App() {
  return (
    <>

      {/* <LoginAdminPage /> */}
        <PanelAdminPage />

      {/* <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/atencioncliente" element={<AtencionClientePage />} />
        <Route exact path="/acceder" element={<AccederPage />} />
        <Route exact path="/comprarevento" element={<EventoPage />} />
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App
