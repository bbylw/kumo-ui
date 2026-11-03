import React from "react";
import { createRoot } from "react-dom/client";
import { Toasty, TooltipProvider } from "@cloudflare/kumo";
import { ShikiProvider } from "@cloudflare/kumo/code";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toasty>
      <TooltipProvider>
        <ShikiProvider
          engine="javascript"
          languages={["tsx", "typescript", "css", "bash"]}
          labels={{ copy: "复制", copied: "已复制" }}
        >
          <App />
        </ShikiProvider>
      </TooltipProvider>
    </Toasty>
  </React.StrictMode>,
);
