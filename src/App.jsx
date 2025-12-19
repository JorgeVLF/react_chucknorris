import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Informações do Navegador</h1>} />
        <Route path="/chuck" element={<h1>Chuck Norris</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
