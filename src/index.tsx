import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReviewSubmit } from "./screens/ReviewSubmit";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ReviewSubmit />
  </StrictMode>,
);
