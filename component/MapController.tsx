import { useState } from 'react'
import { useMapEvents } from 'react-leaflet'

export const MapController = (props: any) => {
  const initialPosition = { lat: 35.4122, lng: 139.413 }
  const initialZoom: number = 11
  const [position, setPosition] = useState(initialPosition)
  const [zoom, setZoom] = useState(initialZoom)

  const map = useMapEvents({
    dragend: () => {
      console.log(map.getCenter())
      setPosition({ lat: map.getCenter().lat, lng: map.getCenter().lng })
    },
    zoomend: () => {
      console.log(map.getZoom())
      setZoom(map.getZoom())
    }
  })

  return <></>
}

export default MapController
