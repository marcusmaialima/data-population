import { makeDomainFunction } from "domain-functions"
import { ListGeometryNeighborhoods } from "./geometryNeighborhoods/schemas"
import {
  ResponsePopulationNeighborhoods,
  ResponsePopulationNeighborhoodsProps,
} from "./populationNeighborhoods/schemas"

export const mergePopulationInGeometryNeighborhoods = makeDomainFunction(
  ListGeometryNeighborhoods,
  ResponsePopulationNeighborhoods,
)(async (geometryNeighborhoods, populationNeighborhoods) => {
  const { crs, features, name, type } = geometryNeighborhoods

  const newFeatures = features.map((feature) => {
    const { bbox, geometry, type, properties } = feature
    const propertiesNeighborhoods = {
      properties: properties,
      populationStatus: [] as ResponsePopulationNeighborhoodsProps,
    }

    populationNeighborhoods.forEach((neighborhood) => {
      if (propertiesNeighborhoods.properties.id === neighborhood.id_geometria) {
        propertiesNeighborhoods.populationStatus.push(neighborhood)
      }
    })

    return {
      bbox,
      geometry,
      type,
      ...propertiesNeighborhoods,
    }
  })

  return {
    crs,
    name,
    type,
    features: newFeatures,
  }
})
