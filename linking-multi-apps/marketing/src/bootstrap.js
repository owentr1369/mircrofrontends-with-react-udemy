import React from "react";
import { createRoot } from "react-dom/client";

// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(<h1>Marketing</h1>);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-marketing");
  if (el) {
    mount(el);
  }
}

export { mount };
