import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;