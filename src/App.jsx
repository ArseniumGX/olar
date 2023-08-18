import "styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import { Menu, Footer, ScrollToTop } from "components";
import { AppRoutes } from "AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
