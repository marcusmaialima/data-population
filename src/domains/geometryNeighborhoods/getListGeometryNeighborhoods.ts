import { pipe } from "domain-functions"
import { fetchGeometryNeighborhoods } from "./fetchGeometryNeighborhoods"
import { sanitizedListGeometryNeighborhood } from "./sanitizedListGeometryNeighborhood"

export const getListGeometryNeighborhoods = pipe(
  fetchGeometryNeighborhoods,
  sanitizedListGeometryNeighborhood,
)
