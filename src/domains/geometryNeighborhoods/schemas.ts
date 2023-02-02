import { z } from "zod"

export const SchemaCRS = z.object({
  type: z.string(),
  properties: z.object({
    name: z.string(),
  }),
})

export const SchemaProperties = z.object({
  id: z.number(),
  name: z.string(),
  setor: z.string(),
  zona: z.string(),
})

const returnFirstItemFromArray = (arr: [] | Record<string, any>[]) => arr[0]

const SchemaGeometry = z.object({
  coordinates: z
    .array(
      z
        .array(
          z.array(
            z.array(z.number()).transform((args: number[]) => {
              return [args[1], args[0]]
            }),
          ),
        )
        .transform(returnFirstItemFromArray),
    )
    .transform(returnFirstItemFromArray),
  type: z.string(),
})

const SchemaFeatures = z.object({
  bbox: z.array(z.number()),
  geometry: SchemaGeometry,
  properties: SchemaProperties,
  type: z.string(),
})

export const ResponseGeometryNeighborhoods = z.object({
  type: z.string(),
  name: z.string(),
  crs: SchemaCRS,
  features: z.array(SchemaFeatures),
})

export const ListGeometryNeighborhoods = z.object({
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
    }),
  ),
})

export type ResponseGeometryNeighborhoodsProps = z.infer<
  typeof ResponseGeometryNeighborhoods
>
