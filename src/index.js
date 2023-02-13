import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProfile from "./pages/AppProfile";
import AppCounter from "./pages/AppCounter";
import AppProducts from "./pages/AppProducts";
import AppJsx from "./pages/AppJsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);
