import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import DetailCountry from "./components/DetailCountry.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { CountriesProvider } from "./context/countriesContext.jsx";
import "./index.css";
import "./App.css";
import { ThemeProvider } from "./context/themeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/country/:id",
    element: <DetailCountry />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
