import { z } from "zod"
import { SchemaCRS, SchemaProperties } from "./geometryNeighborhoods/schemas"
import { ResponsePopulationNeighborhoods } from "./populationNeighborhoods/schemas"

export const SchemaMergeGeometryAndPopulationNeighborhoods = z.object({
  type: z.string(),
  name: z.string(),
  crs: SchemaCRS,
  features: z.array(
    z.object({
      bbox: z.array(z.number()),
      geometry: z.object({
        coordinates: z.array(z.array(z.number())),
      }),
      properties: SchemaProperties,
      type: z.string(),
      populationStatus: ResponsePopulationNeighborhoods,
    }),
  ),
})

export type ResponseUserLoaderData = z.infer<
  typeof SchemaMergeGeometryAndPopulationNeighborhoods
>
