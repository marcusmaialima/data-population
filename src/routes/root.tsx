import { createBrowserRouter } from "react-router-dom"
import { App } from "./home"

import ErrorPage from "../layout/pages/error-page"
import { loaderHome } from "~/routes/home/loader"

export const routerConfig = [
  {
    path: "/",
    element: <App />,
    loader: loaderHome,
    errorElement: <ErrorPage />,
  },
]

export const router = createBrowserRouter(routerConfig)
