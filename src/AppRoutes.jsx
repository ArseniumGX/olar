import { Route, Routes } from "react-router-dom";
import { Home, AboutMe } from "pages";
import { DefaultPage } from "components";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route index element={<Home />} />
        <Route path="sobre-mim" element={<AboutMe />} />
      </Route>
      <Route path="*" element={<h1>Not found...</h1>} />
    </Routes>
  );
}
