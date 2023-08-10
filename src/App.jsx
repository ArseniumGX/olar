import "styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/sobre-mim" element={<h1>Sobre mim...</h1>} />
        <Route path="*" element={<h1>Not found...</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
