import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./styles.css";
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App rootEl={domNode} />);
