import React from "react";
import { createRoot } from "react-dom/client";
import Grid from "./src/Grid";
import "./styles.css";

const domNode = document.getElementById("grid");
const root = createRoot(domNode);

root.render(<Grid />);
