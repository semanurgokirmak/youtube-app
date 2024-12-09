import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"; // ChakraProvider'ı import ediyoruz
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ChakraProvider value={defaultSystem}>
        {" "}
        {/* ChakraProvider'ı buraya ekliyoruz */}
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
