import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement); // Debugging line

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

