import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrowserInfo from "./pages/BrowserInfo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BrowserInfo />} />
        <Route path="/chuck" element={<h1>Chuck Norris</h1>} />
        <Route path="/sobre" element={<h1>Sobre</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
