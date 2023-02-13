import { createContext, useContext, useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import { PositionType } from '../constant/constant'

const posContext = createContext<PositionType | null>(null)

export const MapController = (props: any) => {
  const initialZoom: number = 11
  const [zoom, setZoom] = useState(initialZoom)

  // const [position, setPosition] = useContext(posContext)

  const map = useMapEvents({
    dragend: () => {
      // console.log(map.getCenter())
      // setPosition({ lat: map.getCenter().lat, lng: map.getCenter().lng })
    },
    zoomend: () => {
      console.log(map.getZoom())
      setZoom(map.getZoom())
    }
  })

  return <></>
}

export default MapController
