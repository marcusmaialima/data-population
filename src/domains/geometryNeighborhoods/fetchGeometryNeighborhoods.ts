import { makeDomainFunction } from "domain-functions"
import { fetchAndOptimizeTransformData } from "~/functions/fetchAndOptimizeTransformData"

export const fetchGeometryNeighborhoods = makeDomainFunction()(async () => {
  return fetchAndOptimizeTransformData("/geometrias-bairros")
})
