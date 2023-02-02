import { useRouteError } from "react-router-dom"

interface ErrorResponse {
  data: string
  error: Error
  internal: boolean
  status: number
  statusText: string
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse
  return (
    <div id="error-page" className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-4">{`Ops, ${error.status}!`}</h1>
        <div>
          {error.status === 404 && (
            <p className="text-center">Página não encontrada.</p>
          )}
        </div>
      </div>
    </div>
  )
}
