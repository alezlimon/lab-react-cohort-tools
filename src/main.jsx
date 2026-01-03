import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Note: Import BrowserRouter to enable routing
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Note: Wrap App with Router so routing works */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
