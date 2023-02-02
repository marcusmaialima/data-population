import { z } from "zod"

export const ResponsePopulationNeighborhoods = z.array(
  z
    .object({
      id_geometria: z.number(),
      ano: z.string(),
      populacao: z.number(),
    })
    .transform(({ id_geometria, ano, populacao }) => {
      const yearAndPopulation = [ano, populacao]
      return {
        id_geometria,
        yearAndPopulation,
      }
    }),
)

export type ResponsePopulationNeighborhoodsProps = z.infer<
  typeof ResponsePopulationNeighborhoods
>
