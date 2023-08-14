import { Route, Routes } from "react-router-dom";
import { Home } from "pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<h1>Sobre mim...</h1>} />
      <Route path="*" element={<h1>Not found...</h1>} />
    </Routes>
  );
}
