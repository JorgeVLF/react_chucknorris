import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrowserInfo from "./pages/BrowserInfo";
import ChuckNorris from "./pages/ChuckNorris";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BrowserInfo />} />
        <Route path="/chuck" element={<ChuckNorris />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
