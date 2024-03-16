import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
