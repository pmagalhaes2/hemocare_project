import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Contato from "../pages/Contato/Contato";
import Home from "../pages/Home/Home";
import Orientacoes from "../pages/Orientacoes/Orientacoes";
import Sobre from "../pages/Sobre/Sobre";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orientacoes" element={<Orientacoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
