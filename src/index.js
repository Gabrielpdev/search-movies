import { ThemeProvider } from "@ui5/webcomponents-react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./global.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
