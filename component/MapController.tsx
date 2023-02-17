import { useMapEvents } from 'react-leaflet'
import { PositionType } from '../constant/constant'

export const MapController = (props: { pos: PositionType; setPos: (value: PositionType) => void }) => {
  const map = useMapEvents({
    dragend: () => {
      const newPos: PositionType = { ...props.pos }
      newPos.lat = map.getCenter().lat
      newPos.lng = map.getCenter().lng
      newPos.scale = map.getZoom()
      props.setPos(newPos)
    },
    zoomend: () => {
      const newPos: PositionType = { ...props.pos }
      newPos.lat = map.getCenter().lat
      newPos.lng = map.getCenter().lng
      newPos.scale = map.getZoom()
      props.setPos(newPos)
    }
  })

  return <></>
}

export default MapController
