import { API_DEV_URL } from "~/config/keys"
import { parseNDJSON } from "./parseNDJSON"

export const fetchAndOptimizeTransformData = async (url: string) => {
  const response = await fetch(`http://localhost:5173${url}`)
  let responseObject = {}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(parseNDJSON())
    .pipeTo(
      new WritableStream({
        write(chunk) {
          responseObject = chunk
        },
      }),
    )
  return responseObject
}
