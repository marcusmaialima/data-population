import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import { routerConfig } from "../../../routes/root"

describe("ErrorPage", () => {
  it("should render error page when passing url invalid", () => {
    const routers = createMemoryRouter(routerConfig, {
      initialEntries: ["/about"],
    })
    render(<RouterProvider router={routers} />)

    expect(
      screen.getByRole("heading", {
        name: /ops, 404!/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/página não encontrada\./i)).toBeInTheDocument()
  })
})
