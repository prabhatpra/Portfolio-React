import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // <- import kare

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <- App ko BrowserRouter me wrap kare */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
