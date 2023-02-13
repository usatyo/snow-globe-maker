import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapController from './MapController'
import { origin, PositionType } from '../constant/constant'

export const SquareMap = (props: {pos:PositionType, setPos: (value: PositionType)=>void}) => {
  return (
    <MapContainer
      center={[origin.lat, origin.lng]}
      zoom={origin.scale}
      zoomControl={false}
      className="absolute z-0 left-0 right-0 top-0 bottom-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController pos={props.pos} setPos={props.setPos} />
    </MapContainer>
  )
}

export default SquareMap
