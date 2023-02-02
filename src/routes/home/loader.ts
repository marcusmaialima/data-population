import { UnpackResult } from "domain-functions"
import { getListGeometryNeighborhoods } from "~/domains/geometryNeighborhoods"
import { mergePopulationInGeometryNeighborhoods } from "~/domains/mergePopulationInGeometryNeighborhoods"
import { fetchPopulationNeighborhoods } from "~/domains/populationNeighborhoods"

type ResultListGeometryNeighborhoods = UnpackResult<
  typeof getListGeometryNeighborhoods
>
type ResultListPopulationNeighborhoods = UnpackResult<
  typeof getListGeometryNeighborhoods
>

export async function loaderHome() {
  const listGeometryNeighborhoods: ResultListGeometryNeighborhoods =
    await getListGeometryNeighborhoods()
  const listPopulationNeighbors: ResultListPopulationNeighborhoods =
    await fetchPopulationNeighborhoods()

  if (!listGeometryNeighborhoods.success) {
    return new Error("A Lista de geometrias dos bairros não foi encontrada.")
  }

  if (!listPopulationNeighbors.success) {
    return new Error("A Lista da população dos bairros não foi encontrada.")
  }

  const mergeDates = await mergePopulationInGeometryNeighborhoods(
    listGeometryNeighborhoods.data,
    listPopulationNeighbors.data,
  )

  if (!mergeDates.success) {
    return new Error(
      "Algo inesperado aconteceu, tente novamente ou contate o suporte.",
    )
  }

  return mergeDates.data
}
