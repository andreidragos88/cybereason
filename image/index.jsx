import React from "react";
import { createRoot } from "react-dom/client";
import Image from "./src/Image";
import "./styles.css";

const domNode = document.getElementById("image");
const root = createRoot(domNode);

root.render(<Image />);
