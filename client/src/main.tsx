import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path=":reviewId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
