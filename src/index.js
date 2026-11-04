import React from "react";
import ReactDOM from "react-dom/client";
// Fontes servidas pelo próprio site (sem requisições ao Google Fonts: o IP do visitante não vai para terceiros).
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/caveat/latin-400.css";
import "@fontsource/caveat/latin-500.css";
import "@fontsource/caveat/latin-600.css";
import "@fontsource/caveat/latin-700.css";
import "@/index.css";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
