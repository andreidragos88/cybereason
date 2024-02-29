import React from "react";
import { createRoot } from "react-dom/client";
import List from "./src/List";
import "./styles.css";

const domNode = document.getElementById("list");
const root = createRoot(domNode);

root.render(<List />);
