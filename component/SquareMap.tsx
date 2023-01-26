import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MapController from './MapController'

export const SquareMap = () => {
  return (
    <MapContainer center={[35.4122, 139.4130]} zoom={13} scrollWheelZoom={false} className="h-[600px] w-[1000px]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
    </MapContainer>
  )
}

export default SquareMap