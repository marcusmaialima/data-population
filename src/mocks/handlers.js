/* eslint-disable @typescript-eslint/no-var-requires */
import { rest } from "msw"
import {
  contractGeometryNeighborhoods,
  contractPopulationNeighborhoods,
} from "./contracts"

export const handlers = [
  rest.get("http://localhost:5173/geometrias-bairros", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contractGeometryNeighborhoods))
  }),
  rest.get("http://localhost:5173/populacao-bairros", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(contractPopulationNeighborhoods))
  }),
]
