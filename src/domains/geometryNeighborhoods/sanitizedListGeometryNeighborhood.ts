import { makeDomainFunction } from "domain-functions"
import { ResponseGeometryNeighborhoods } from "./schemas"

export const sanitizedListGeometryNeighborhood = makeDomainFunction(
  ResponseGeometryNeighborhoods,
)(async (sanitizedResult) => sanitizedResult as unknown)
