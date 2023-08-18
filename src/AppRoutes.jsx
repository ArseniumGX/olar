import { Route, Routes } from "react-router-dom";
import { Home, AboutMe, Post, NotFound } from "pages";
import { DefaultPage } from "components";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route index element={<Home />} />
        <Route path="sobre-mim" element={<AboutMe />} />
      </Route>
      <Route path="posts/:id/*" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
