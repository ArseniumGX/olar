import "styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { Menu, Footer } from "components";
import { AppRoutes } from "AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
