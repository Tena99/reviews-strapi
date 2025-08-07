import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:1337";

const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path=":reviewId" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
