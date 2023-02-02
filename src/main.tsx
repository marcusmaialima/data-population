/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/root"

if (import.meta.env.DEV) {
  const { worker } = require("./mocks/browser.js")
  worker.start()
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
