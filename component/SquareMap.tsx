import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapController from './MapController'

export const SquareMap = () => {
  return (
    <MapContainer
      center={[35.4122, 139.413]}
      zoom={13}
      zoomControl={false}
      className="absolute z-0 left-0 right-0 top-0 bottom-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
    </MapContainer>
  )
}

export default SquareMap
