import { makeDomainFunction } from "domain-functions"
import { fetchAndOptimizeTransformData } from "~/functions/fetchAndOptimizeTransformData"

export const fetchPopulationNeighborhoods = makeDomainFunction()(async () => {
  return fetchAndOptimizeTransformData("/populacao-bairros")
})
