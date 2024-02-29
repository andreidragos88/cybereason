import React from "react";
import { createRoot } from "react-dom/client";
import Text from "./src/Text";
import "./styles.css";

const domNode = document.getElementById("text");
const root = createRoot(domNode);

root.render(<Text />);
