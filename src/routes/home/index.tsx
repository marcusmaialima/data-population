/* eslint-disable no-debugger */
import "leaflet/dist/leaflet.css"
import "./index.css"
import { useLoaderData } from "react-router-dom"
import type { ResponseUserLoaderData } from "~/domains/schemas"

import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  FeatureGroup,
} from "react-leaflet"
import type { LatLngExpression } from "leaflet"
import Chart from "react-google-charts"

const containerStyle = {
  width: "100vw",
  height: "100vh",
}

const fillBlueOptions = { color: "blue", fillColor: "blue" }

export function App() {
  const { features } = useLoaderData() as ResponseUserLoaderData

  const initialCoordinates = features ? features[0].bbox : [-48.3336, -10.183]
  function transformedCoordinates(coordinates: number[]) {
    return [coordinates[1], coordinates[0]]
  }

  const centerMapCoordinates = transformedCoordinates(initialCoordinates)

  return (
    <MapContainer
      data-testid="mapContainer"
      center={centerMapCoordinates as LatLngExpression}
      zoom={14}
      scrollWheelZoom={false}
      style={containerStyle}
    >
      <TileLayer
        attribution="&copy;"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {features
        ? features?.map(
            ({
              geometry,
              properties: { id, name, zona },
              populationStatus,
            }) => {
              const positionsNeighborhoods = geometry.coordinates
              const yearAndPopulationData = populationStatus.map(
                ({ yearAndPopulation }) => yearAndPopulation,
              )

              return (
                <FeatureGroup key={id}>
                  <Popup data-testid={`popup-id-${id}`}>
                    <Chart
                      data-testid={`chart-bar-id-${id}`}
                      chartType="Bar"
                      width="380px"
                      height="250px"
                      data={[["Ano", "População"], ...yearAndPopulationData]}
                      options={{
                        chart: {
                          title: `${name} - Zona ${zona}`,
                          subtitle: "Gráfico da população ao longo dos anos",
                          chartArea: { width: "50%" },
                        },
                      }}
                    />
                  </Popup>
                  <Polygon
                    data-testid={`polygon-area-id-${id}`}
                    positions={positionsNeighborhoods as LatLngExpression[]}
                    pathOptions={fillBlueOptions}
                  />
                </FeatureGroup>
              )
            },
          )
        : null}
    </MapContainer>
  )
}
