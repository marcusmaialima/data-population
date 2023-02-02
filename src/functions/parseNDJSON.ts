export function parseNDJSON() {
  let ndjsonBuffer = ""
  return new TransformStream({
    transform(chunk, controller) {
      ndjsonBuffer += chunk
      controller.enqueue(JSON.parse(ndjsonBuffer))
    },
    flush(controller) {
      if (!ndjsonBuffer) return
      controller.enqueue(JSON.parse(ndjsonBuffer))
    },
  })
}
